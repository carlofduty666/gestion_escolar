const express = require('express');
const cors = require('cors');
const db = require('./db');
const estudianteRoutes = require('./routes/estudiantes.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenido al sistema escolar!');
});

app.use('/estudiantes', estudianteRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});