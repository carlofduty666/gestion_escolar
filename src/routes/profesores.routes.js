const express = require('express');
const router = express.Router();
const profesoresControllerFunctions = require('../controllers/profesores.controller');

router.get('/', profesoresControllerFunctions.getAllProfesores);

router.get('/id/:id_profesor', profesoresControllerFunctions.getProfesorById);

router.get('/nombre/:nombre', profesoresControllerFunctions.getProfesorByName);

router.post('/', profesoresControllerFunctions.createProfesor);

router.put('/', profesoresControllerFunctions.updateProfesor);

router.delete('/id/:id_profesor', profesoresControllerFunctions.deleteProfesor);

module.exports = router;