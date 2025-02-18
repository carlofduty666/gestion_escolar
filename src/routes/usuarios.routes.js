const express = require('express');
const router = express.Router();
const usersControllerFunctions = require('../controllers/usuarios.controller');

router.get('/', usersControllerFunctions.getAllUser);

router.get('/id/:id_usuario', usersControllerFunctions.getUserById);

router.post('/', usersControllerFunctions.createUser);

router.put('/', usersControllerFunctions.updateUser);

router.delete('/id/:id_usuario', usersControllerFunctions.deleteUser);

module.exports = router;