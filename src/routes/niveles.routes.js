const express = require('express');
const router = express.Router();
const nivelesControllerFunctions = require('../controllers/niveles.controller');

router.get('/', nivelesControllerFunctions.getAllNiveles);
router.post('/', nivelesControllerFunctions.createNivel);
router.put('/', nivelesControllerFunctions.updateNivel);
router.delete('/id/:id_nivel', nivelesControllerFunctions.deleteNivel);

module.exports = router;

