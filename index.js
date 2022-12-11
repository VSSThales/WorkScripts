const express = require('express');
const db = require('./src/database/db.js');

const app = express()

server.use(express.json());

server.get('./src/screens/dash', (req, res) => {
    const { index } = req.params;

    return res.send(dash);
})