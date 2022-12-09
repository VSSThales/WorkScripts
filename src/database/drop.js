const db = require('./db')

async function drobTables() {
    await db.connect()
    await db.query('DROP TABLE equipe CASCADE')
    await db.query('DROP TABLE cidades CASCADE')
    await db.query('DROP TABLE jogos CASCADE')
    await db.query('DROP TABLE jogador CASCADE')
    await db.query('DROP TABLE tecnicos CASCADE')
    await db.end()

    console.log("Tabelas removidos");
}

dropTables()