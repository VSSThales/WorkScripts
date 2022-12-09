const db = require('./db')

async function listData() {
    await db.connect()
    var result

    result = await db.query('SELECT * FROM equipe');
    console.log("EQUIPES:");
    console.log(result.rows);

    result = await db.query('SELECT * FROM jogos');
    console.log("JOGO:");
    console.log(result.rows);

    result = await db.query('SELECT * FROM tecnicos');
    console.log("TECNICO:");
    console.log(result.rows);

    result = await db.query('SELECT * FROM cidades');
    console.log("CIDADE:");
    console.log(result.rows);

    result = await db.query('SELECT * FROM jogador');
    console.log("JOGADORES:");
    console.log(result.rows);
}

listData()