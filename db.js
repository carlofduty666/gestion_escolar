const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config(); // carga las variables de entorno desde el archivo .env

const pool = mysql.createPool({ // un pool es una colección de conexiones que se pueden reutilizar
  connectionLimit: 10, // limita el número de conexiones simultáneas
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}).promise(); // devuelve un objeto Promise que se resuelve con un array de resultados

module.exports = pool;