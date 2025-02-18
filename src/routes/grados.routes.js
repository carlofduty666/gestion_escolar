const express = require('express');
const router = express.Router();
const gradosControllerFunctions = require('../controllers/grados.controller');

router.get('/', gradosControllerFunctions.getAllGrados);

router.post('/', gradosControllerFunctions.createGrado);

router.put('/', gradosControllerFunctions.updateGrado);

router.delete('/id/:id_grado', gradosControllerFunctions.deleteGrado);

module.exports = router;