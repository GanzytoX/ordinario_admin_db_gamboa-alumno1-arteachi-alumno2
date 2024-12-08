const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
});

pool.getConnection((err) => {
    if (err) {
        console.error('Error connection to database:', err.message);
    } else {
        console.log('Connected to databse');
    }
});

module.exports = pool;
