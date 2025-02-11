const express = require('express');
const router = express.Router();
const { Estudiantes } = require('../models/estudiantes.model');

router.get('/', (req, res) => {
    Estudiantes.getAllEstudiantes((err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).send(err);
            return;
        } else {
            res.send({ users: results });
        }
    });
})

module.exports = router;