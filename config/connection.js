const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    host: 3306,
    database: 'burgers_db'
});

connection.connect(function(err) {
    if (err) throw err;

    console.log('connected as id', connection.threadId);
});

module.exports = connection;
