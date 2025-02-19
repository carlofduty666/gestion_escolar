const express = require('express');
const router = express.Router();
const materiasControllerFunctions = require('../controllers/materias.controller');

router.get('/', materiasControllerFunctions.getAllMaterias);
router.get('/nombre/:nombre_materia', materiasControllerFunctions.getMateriaByName);
router.get('/grado/:id_grado', materiasControllerFunctions.getMateriaByGrado);
router.get('/profesor/:id_profesor', materiasControllerFunctions.getMateriaByProfesor);
router.post('/profesor/:id_profesor/materia/:id_materia', materiasControllerFunctions.asignarMateriaProfesor);
router.post('/', materiasControllerFunctions.createMateria);
router.put('/', materiasControllerFunctions.updateMateria);
router.delete('/id/:id_materia', materiasControllerFunctions.deleteMateria);

module.exports = router;
