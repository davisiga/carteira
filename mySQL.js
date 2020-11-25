const mysql = require('mysql');

var pool = mysql.createPool({
    user:"root",
    password:"",
    database: "invest",
    host: "localhost",
    port: 3306,
});

exports.pool = pool;