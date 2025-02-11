const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenido al sistema escolar!');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});