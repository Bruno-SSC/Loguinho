import * as db from './db.mjs';

export function login(user, password) {

    var data = {
        "operation": "find",
        "info": {
            "user": user,
            "senha": password
        }
    }

    db.crud(data)

}
export function registro(user, password) {

    var data = {
        "operation": "insert",
        "info": {
            "user": user,
            "senha": password
        }
    }

    db.crud(data)

}