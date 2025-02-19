const express = require('express');
const cors = require('cors');
const { db } = require('./db');
const app = express();

// Import routes instead of controller
const estudiantesRoutes = require('./routes/estudiantes.routes');
const profesoresRoutes = require('./routes/profesores.routes');
const representantesRoutes = require('./routes/representantes.routes');
const usersRoutes = require('./routes/usuarios.routes');
const nivelesRoutes = require('./routes/niveles.routes');
const gradosRoutes = require('./routes/grados.routes');
const calificacionesRoutes = require('./routes/calificaciones.routes');
const materiasRoutes = require('./routes/materias.routes');

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Bienvenido al sistema escolar!');
});


app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesoresRoutes);
app.use('/representantes', representantesRoutes);
app.use('/users', usersRoutes);
app.use('/niveles', nivelesRoutes);
app.use('/grados', gradosRoutes);
app.use(calificacionesRoutes);
app.use('/materias', materiasRoutes);


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