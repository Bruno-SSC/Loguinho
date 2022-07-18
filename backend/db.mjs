import { MongoClient } from "mongodb"
// importa um objeto com um metodo para conectar no mongoDB

export function crud(data) {
    MongoClient.connect("mongodb://localhost", (err, db) => {
        var db = db.db("loginDB")

        if (data.operation == "insert") {
            db.collection("credentials").insertOne(data.info, (err, res) => {
                console.log("Number of documents inserted: " + res.insertedCount)
            })
        }

        if (data.operation == "find") {
            db.collection("credentials").find(`${data.info.user} : ${data.info.senha}`).toArray((err, result) => {
                console.log(result)
            })
        }
    })
}