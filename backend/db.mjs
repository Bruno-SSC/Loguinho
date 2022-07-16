import { MongoClient } from 'mongodb'
const cliente = MongoClient

export function getConn() {
    cliente.connect("mongodb://localhost")
        .then((conn) => { return conn.db("clients") })
        .catch(err => { console.log(err) })

    // o catch recebe promises que deram errado e trata automaticamente
}