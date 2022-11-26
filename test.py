import json
from flask import Flask, render_template, Response, request,jsonify,redirect,url_for
from flask_sqlalchemy import SQLAlchemy
import numpy as np


app = Flask(__name__)
app.secret_key = 'key_hd_18ct1'
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://root:@localhost/hd_18ct1"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True


# connect db
db = SQLAlchemy(app)
db.Model.metadata.reflect(bind=db.engine, schema='hd_18ct1')


class Money(db.Model):
    __table__ = db.Model.metadata.tables["hd_18ct1.money"]
    
money = Money.query.all()


# for money in money:
#     obj = json.loads(money.money_feature)
#     print(money.money_price +" : " + obj['hinhMatTruoc'] +" - "+ obj['hinhMatSau']) 


a = np.array([8.202460e-04,3.727151e-02,9.230862e-01,3.882202e-02])

a = np.where(a > 0.5, a, 0)
print(round(0.9989717*100,2))

    

    