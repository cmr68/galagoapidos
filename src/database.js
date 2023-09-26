const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:       process.env.DB_HOST     || "localhost",
    user:       process.env.DB_USER     || "admin",
    password:   process.env.DB_PASSWORD || "galago2023",
    database:   process.env.DB_NAME     || "galagoApi",
    port:       process.env.DB_PORT     || 3306
}).promise();

console.log("Conexión con la BBDD creada");

module.exports = {connection}