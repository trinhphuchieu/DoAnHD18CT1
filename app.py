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
from util import base64_to_pil
import json
from flask_login import UserMixin, login_user, LoginManager, login_required, logout_user, current_user
from flask_sqlalchemy import SQLAlchemy
from flask_mysqldb import MySQL
from flask_bcrypt import Bcrypt
import uuid

#Khởi tạo flask app  
app = Flask(__name__)
app.secret_key = 'key_hd_18ct1'
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:@localhost/hd_18ct1"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

MAX_BUFFER_SIZE = 50 * 1000 * 100   
sio = SocketIO(app, max_http_buffer_size=MAX_BUFFER_SIZE, cors_allowed_origins="*")


# ket noi db
db = SQLAlchemy(app)
db.Model.metadata.reflect(bind=db.engine, schema='hd_18ct1')


# lop DB
class Money(db.Model):
    __table__ = db.Model.metadata.tables["hd_18ct1.money"]
    
    def get_id(self):
        return (self.money_price)

class Country(db.Model):
    __table__ = db.Model.metadata.tables["hd_18ct1.country"]
    
    def get_id(self):
        return (self.country_code)
    
# lay du lieu db
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
    x = Dense(7, activation='softmax', name='predictions')(x)
    # Compile
    my_model = Model(inputs=input, outputs=x)
    my_model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
    return my_model

class_name = ['00000','10000','100000','20000','200000','50000','500000']  # Dinh nghia class
model = get_model()
model.load_weights('models/weights-45-0.99.hdf5')

#  ham du don
def model_predict(img, model):
    image = img.copy()
    image = cv2.resize(image, dsize=(128, 128))
    image = image.astype('float') * 1. / 255
    # chuyen sang tensor
    image = np.expand_dims(image, axis=0)
    # du doan
    predict = model.predict(image)
    return predict

# lay info du lieu
def getJsonResult(infoMoney):
    money = listDataMoney[infoMoney[0]]
    country = listDataCountry[money.country_code]
    
    if len(infoMoney) == 3:
        ketQuaXacXuat = list()
        for i in infoMoney[2]:
            strMoney = listDataMoney[i[0]]
            strCountry = listDataCountry[strMoney.country_code]
            ketQuaXacXuat.append(json.dumps({
                "money_price": strMoney.money_price,
                "currency": strCountry.currency,
                "money_accuracy": i[1],
                "money_feature": strMoney.money_feature,
            }))
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
        "money_list": ketQuaXacXuat,
        })   
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

#  nhan anh tu client
@sio.on('image')
def image(data_image):
    sbuf = io.StringIO()
    sbuf.write(data_image)
    data_image = data_image.split(",")[1]
    img = imread(io.BytesIO(base64.b64decode(data_image)))
    frame = cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)
    # cv2.imwrite("static/uploads/geeks"+str(uuid.uuid1())+".jpg",frame)
    predict = model_predict(frame, model)
    # print(class_name[np.argmax(predict)])
    maxDuDoan = np.argmax(predict)
    money = class_name[maxDuDoan]
    xacXuat = str(round(np.max(predict)*100,2))+"%"
    arrPredict = list()
    count=0
    predict.tolist()
    for i in predict[0]:
        if count == 0:
            count+=1
            continue
        # if maxDuDoan == count:
        #     continue
        arrPredict.append([class_name[count],str(round(i*100,3))+"%"])
        count+=1
    if (np.max(predict)>=0.7) and (np.argmax(predict[0])!=0):
        emit('response_back',getJsonResult([money,xacXuat,arrPredict]))
    else:
        emit('response_back',json.dumps({"is_money": False}))

# du doan hinh anh
@app.route('/predict', methods=['GET', 'POST'])
def predict():
    if request.method == 'POST':
        img = base64_to_pil(request.json)
        img.save("./static/uploads/image.png")
        predict = model_predict(cv2.imread(cv2.samples.findFile("./static/uploads/image.png")), model)
        
        if (np.max(predict)>=0.8) and (np.argmax(predict[0])!=0):
            return jsonify(getJsonResult([class_name[np.argmax(predict)],str(round(np.max(predict)*100,2))+"%"]))
        else:
            return jsonify(json.dumps({"is_money": False}))
    return None

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':     
    # app.run(debug=True)
    sio.run(app, debug=True)
