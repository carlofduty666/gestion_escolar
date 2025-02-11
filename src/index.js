const express = require('express');
const cors = require('cors');
const { db } = require('./db');
const app = express();

const estudiantesController = require('./controllers/estudiantes.controller');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenido al sistema escolar!');
});

app.use('/estudiantes', estudiantesController);

db.connect((error) => {
  if (error) {
      console.log('Error de conexion')
      return;
  }
  console.log('Conexión exitosa a la base de datos');
  app.listen(9999, () => {
      console.log('Servidor corriendo en: http://localhost:9999')
  })
});