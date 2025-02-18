const express = require('express');
const router = express.Router();
const estudiantesControllerFunctions = require('../controllers/estudiantes.controller');

router.get('/', estudiantesControllerFunctions.getAllEstudiantes);

router.get('/id/:id_estudiante', estudiantesControllerFunctions.getEstudianteById);

router.post('/', estudiantesControllerFunctions.createEstudiante);

router.put('/', estudiantesControllerFunctions.updateEstudiante);

router.delete('/id/:id_estudiante', estudiantesControllerFunctions.deleteEstudiante);


// router.get('/nombre/:nombre', estudiantesControllerFunctions.getEstudianteByNombre);

module.exports = router;
