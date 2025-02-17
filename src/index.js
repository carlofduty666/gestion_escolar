const express = require('express');
const cors = require('cors');
const { db } = require('./db');
const app = express();

// Import routes instead of controller
const estudiantesRoutes = require('./routes/estudiantes.routes');
const profesoresRoutes = require('./routes/profesores.routes');


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Bienvenido al sistema escolar!');
});


app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesoresRoutes);


db.connect((error) => {
  if (error) {
      console.log('Error de conexion')
      return;
  }
  console.log('Conexión exitosa a la base de datos');
  app.listen(9997, () => {
      console.log('Servidor corriendo en: http://localhost:9997')
  })
});