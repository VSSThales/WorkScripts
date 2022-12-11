const db = require('./db')

async function insertData(){
    await db.connect()

    const queryEquipe = 'INSERT into equipe (id_equipe) values ($1)'
}

insertData()