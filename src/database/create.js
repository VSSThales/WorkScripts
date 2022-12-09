const db = require('./db')

async function createTables() {
    await db.connect()

    await db.query('CREATE TABLE jogo(equipe_casa INTEGER PRIMARY KEY, equipe_visitante INTEGER PRIMARY KEY, pontos_casa INTEGER pontos_visitantes INTEGER, data String)');

    await db.query('CREATE TABLE equipes(id_equipe INTEGER PRIMARY KEY)');

    await db.query('CREATE TABLE jogador(id_jogador INTEGER PRIMARY KEY, name String, equipe INTEGER FOREIGN KEY (equipe) REFERENCES equipes(id_equipe))');

    await db.query('CREATE TABLE cidades(id_cidade INTEGER PRIMARY KEY, name String, time INTEGER FOREIGN KEY (time) REFERENCES equipes(id_equipe))');

    await db.query('CREATE TABLE tecnicos(id_tecnico INTEGER PRIMARY KEY, nome String, funcao String, equipe String, FOREIGN KEY(equipe) REFERENCES equipes(id_equipe))');

    await db.end

    console.log('Tabelas Cridas');

}

createTables()