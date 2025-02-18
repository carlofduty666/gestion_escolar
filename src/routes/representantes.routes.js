const express = require('express');
const router = express.Router();
const representantesControllerFunctions = require('../controllers/representantes.controller');

router.get('/', representantesControllerFunctions.getAllRepresentantes);
router.get('/id/:id_representante', representantesControllerFunctions.getRepresentanteById);
router.get('/cedula/:cedula', representantesControllerFunctions.getRepresentanteByCedula);
router.post('/', representantesControllerFunctions.createRepresentante);
router.put('/', representantesControllerFunctions.updateRepresentante);
router.delete('/id/:id_representante', representantesControllerFunctions.deleteRepresentante);

module.exports = router;