async function connect() {
    if (global.connection)
        return global.conn.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: ''
    });

    //apenas testando a conexão
    const jcbc = await pool.connect();
    console.log("Conectado no PostgreSQL!");

    const res = await jcbc.query('SELECT NOW()');
    console.log(res.rows[0]);
    jcbc.release();

    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}