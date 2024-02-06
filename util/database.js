const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'nodeUser',
    database: 'nodedb',
    password: 'nodecomplete'
});

module.exports = pool.promise();