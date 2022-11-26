from flask import Flask, render_template, Response, request,jsonify,redirect,url_for
import cv2
import datetime, time
import os 
import sys
from os import listdir
import numpy as np
from threading import Thread
from tensorflow.keras.applications.vgg16 import VGG16
from tensorflow.keras.layers import Input, Flatten, Dense, Dropout
from tensorflow.keras.models import Model
from tensorflow.keras.callbacks import ModelCheckpoint
import matplotlib.pyplot as plt
from tensorflow.keras.models import  load_model
from importlib import import_module
from flask.helpers import make_response
from flask_socketio import emit, SocketIO
import base64
import io
from imageio import imread
# web
import json
from flask_login import UserMixin, login_user, LoginManager, login_required, logout_user, current_user
from flask_sqlalchemy import SQLAlchemy
from flask_mysqldb import MySQL
from flask_bcrypt import Bcrypt

global capture,rec_frame, grey, switch, neg, face, rec, out 
capture=0
grey=0
neg=0
face=0
switch=1
rec=0


#instatiate flask app  
app = Flask(__name__)
app.secret_key = 'key_hd_18ct1'
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:@localhost/hd_18ct1"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

MAX_BUFFER_SIZE = 50 * 1000 * 100   
sio = SocketIO(app, max_http_buffer_size=MAX_BUFFER_SIZE, cors_allowed_origins="*")


# connect db
db = SQLAlchemy(app)
db.Model.metadata.reflect(bind=db.engine, schema='hd_18ct1')


# class DB
class Accounts(db.Model,UserMixin):
    __table__ = db.Model.metadata.tables["hd_18ct1.accounts"]

    def get_id(self):
        return (self.username)

class Money(db.Model):
    __table__ = db.Model.metadata.tables["hd_18ct1.money"]
    
    def get_id(self):
        return (self.money_price)

class Country(db.Model):
    __table__ = db.Model.metadata.tables["hd_18ct1.country"]
    
    def get_id(self):
        return (self.country_code)
    
    
    
# camera
camera = cv2.VideoCapture(0)
# get data db
getDataMoney = Money.query.all()
listDataMoney = {}
for item in getDataMoney:
    listDataMoney[item.money_price] = item
listDataCountry = {}
getDataCountry = Country.query.all()
for item in getDataCountry:
    listDataCountry[item.country_code] = item

def get_model():
    model_vgg16_conv = VGG16(weights='imagenet', include_top=False)
    # Dong bang cac layer
    for layer in model_vgg16_conv.layers:
        layer.trainable = False
    # Tao model
    input = Input(shape=(128, 128, 3), name='image_input')
    output_vgg16_conv = model_vgg16_conv(input)
    # Them cac layer FC va Dropout
    x = Flatten(name='flatten')(output_vgg16_conv)
    x = Dense(4096, activation='relu', name='fc1')(x)
    x = Dropout(0.5)(x)
    x = Dense(4096, activation='relu', name='fc2')(x)
    x = Dropout(0.5)(x)
    x = Dense(4, activation='softmax', name='predictions')(x)
    # Compile
    my_model = Model(inputs=input, outputs=x)
    my_model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
    return my_model


class_name = ['00000', '10000', '20000', '50000']  # Dinh nghia class

model = get_model()
model.load_weights('models/weights-42-0.99.hdf5')
#model.load_weights('models/Final.h5')
def model_predict(img, model):
    image = img.copy()
    image = cv2.resize(image, dsize=(128, 128))
    image = image.astype('float') * 1. / 255
    # Convert to tensor
    image = np.expand_dims(image, axis=0)
    # Predict
    predict = model.predict(image)
    return predict


def record(out):
    global rec_frame
    while(rec):
        time.sleep(0.05)
        out.write(rec_frame)


def gen_frames():  # generate frame by frame from camera
    global out, capture,rec_frame
    global infoMoney
    while True:
        if camera is None:
            break
        if not camera.isOpened():
            break
        success, frame = camera.read() 
        if success:
            if(grey):
                frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            if(neg):
                frame=cv2.bitwise_not(frame)    
            if(capture):
                capture=0
                now = datetime.datetime.now()
                p = os.path.sep.join(['shots', "shot_{}.png".format(str(now).replace(":",''))])
                cv2.imwrite(p, frame)
            
            if(rec):
                rec_frame=frame
                frame= cv2.putText(cv2.flip(frame,1),"Recording...", (0,25), cv2.FONT_HERSHEY_SIMPLEX, 1, (0,0,255),4)
                frame=cv2.flip(frame,1)    
            try:
                font = cv2.FONT_HERSHEY_SIMPLEX
                predict = model_predict(frame, model)
                org = (50, 50)
                fontScale = 1.5
                color = (0, 255, 0)
                thickness = 2
                infoMoney = class_name[np.argmax(predict),np.argmax(predict)]
                # print(np.max(predict[0],axis=0))
                # print(np.argmax(predict),np.max(predict),predict[0])
                if (np.max(predict)>=0.5) and (np.argmax(predict[0])!=0):
                    infoMoney = [class_name[np.argmax(predict)],str(round(np.max(predict)*100,2))+"%"]
                    # frame = cv2.putText(frame, "200000 VND", org, font, fontScale, color, thickness, cv2.LINE_AA)
                    #frame = cv2.putText(frame, class_name[np.argmax(predict)]+" VND", org, font, fontScale, color, thickness, cv2.LINE_AA)
                else:
                    infoMoney = ["No money","100%"]
                    frame = cv2.putText(frame, "No money", org, font, fontScale, color, thickness, cv2.LINE_AA)
                ret, buffer = cv2.imencode('.jpg', frame)
                frame = buffer.tobytes()
                
                yield (b'--frame\r\n'
                       b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
            except Exception as e:
                print("gen_frame"+str(e))
                pass
                
        else:
            pass

    
# @app.route('/video_stream')
# def video_stream():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')
    


@app.route('/testAPI', methods=['GET'])
def test():
    money = Money.query.filter_by(money_price='20000').first()
    print(money.money_size)
    return Response(json.dumps({"is_money": False}), mimetype='application/json')

@app.route('/streamResult', methods=['GET'])
def streamText():
    def responseResult():
        try:
            money = None
            if(infoMoney[0] != 'No money'):
                money = listDataMoney[infoMoney[0]]
                #money = listDataMoney['200000']
            if money is None:
                yield json.dumps({"is_money": False})
            print("hieueueuue"+infoMoney[0])
            country = listDataCountry[money.country_code]
            yield json.dumps({
            "is_money": True,
            "money_accuracy": infoMoney[1],
            "money_price": money.money_price,
            "money_type": money.money_type,
            "money_size": money.money_size,
            "country": country.country_name,
            "currency": country.currency,
            "money_feature": money.money_feature,
            "money_release": str(money.money_release),
            }) 
        except Exception as e:
            print("ERROR" + str(e))
            yield json.dumps({"is_money": False})
    # return Response('a',mimetype='text/plain')
    return Response(responseResult(), mimetype='application/json')

result = ''

def getJsonResult(infoMoney):
    money = listDataMoney[infoMoney[0]]
    country = listDataCountry[money.country_code]
    return json.dumps({
            "is_money": True,
            "money_accuracy": infoMoney[1],
            "money_price": money.money_price,
            "money_type": money.money_type,
            "money_size": money.money_size,
            "country": country.country_name,
            "currency": country.currency,
            "money_feature": money.money_feature,
            "money_release": str(money.money_release),
            })
     

@app.route('/startVideo', methods=['GET'])
def startVideo():
    camera = cv2.VideoCapture(0)
    response = make_response(jsonify({"message": "success"}), 201)
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.content_type = "application/json"
    return response


@app.route('/stopVideo', methods=['GET'])
def stopVideo():
    camera.release()
    cv2.destroyAllWindows()
    response = make_response(jsonify({"message": "success"}), 201)
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.content_type = "application/json"
    return response

@sio.on('image')
def image(data_image):
    sbuf = io.StringIO()
    sbuf.write(data_image)
    data_image = data_image.split(",")[1]
    img = imread(io.BytesIO(base64.b64decode(data_image)))
    frame = cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)
    predict = model_predict(frame, model)
    print(class_name[np.argmax(predict)])
    if (np.max(predict)>=0.8) and (np.argmax(predict[0])!=0):
        print(predict)
        emit('response_back',getJsonResult([class_name[np.argmax(predict)],str(round(np.max(predict)*100,2))+"%"]))
    else:
        emit('response_back',json.dumps({"is_money": False}))
        
    # retval,buffer = cv2.imencode('.jpg', frame)
    # b = base64.b64encode(buffer)
    # b = b.decode()
    # data_image = "data:image/jpeg;base64," + b
    # emit('response_back', data_image)
    
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':     
    # app.run(debug=True)
    sio.run(app, debug=True)
