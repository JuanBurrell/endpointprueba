const { MongoClient } = require('mongodb');
const client = new MongoClient("mongodb://root:123@localhost:2707", 
{ useNewUrlParser: true });
const db = client.db("Nombre de la base de datos")
module.exports = db;