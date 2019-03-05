#Team DoubleU
#Kaitlin Wan
#SoftDev2 PD6
#K07 -- Import/Export Bank
#2019-03-05

import pymongo
import json
import urllib.request

SERVER_ADDR="157.230.63.56"
connection=pymongo.MongoClient(SERVER_ADDR)
db = connection["DoubleU"]
col = db["Laureate"]

data = urllib.request.urlopen("http://api.nobelprize.org/v1/laureate.json")
parsed = json.loads(data.read())

with open(data) as stuff:
    allL = json.load(stuff)

col.insert(allL)
