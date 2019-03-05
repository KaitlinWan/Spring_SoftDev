#Team DoubleU
#Kaitlin Wan
#SoftDev2 PD6
#K07 -- Import/Export Bank
#2019-03-05

import pymongo
import json
import pprint

SERVER_ADDR="157.230.63.56"
connection=pymongo.MongoClient(SERVER_ADDR,27017)
db = connection["DoubleU"]
col = db["Laureate"]

with open("laureate.json") as stuff:
    data = json.load(stuff)
    pprint.pprint(data)


