import { MongoClient } from "mongodb"
// importa um objeto com um metodo para conectar no mongoDB


export function getConn(dbname, URL) {
    MongoClient.connect(URL, (err, db) => {
        var db = db.db(`${dbname}`)
    })
}


export function insert(db, data) {
    try {
        db.collection("customers").insertMany(data, (err, res) => {
            console.log("Number of documents inserted: " + res.insertedCount)
        })
    }
    catch
    {
        db.createCollection("customers", (err, res) => {
            console.log("colection criada")
            insert(db, data)
        })
    }
}

export function find(db) {
    db.collection("customers").find({}).toArray((err, result) => {
        console.log(result)
    })
}
