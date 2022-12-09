async function connect() {
    if (global.connection)
        return global.conn.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: 'postgres://fyazuind:r34WG7VcdfJvN4WplbWYHEk-hfyYELv1@isilo.db.elephantsql.com:5432/fyazuind'
    });

    //apenas testando a conexão
    const jcbc = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");

    const res = await jcbc.query('SELECT NOW()');
    console.log(res.rows[0]);
    jcbc.release();

    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}