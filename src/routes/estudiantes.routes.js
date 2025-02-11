const express = require('express');
const estudianteController = require('../controllers/estudiantes.controller');

const router = express.Router(); // crea un objeto de tipo Router el cual es un middleware que se encarga de manejar las rutas, un middelware es una función que se ejecuta antes de que se ejecute una ruta para validar algo

router.get('/', estudianteController.getAllEstudiantes); // crea una ruta para obtener todos los estudiantes

router.get('/:id', estudianteController.getEstudiandteById); // crea una ruta para obtener un estudiante por su id

router.post('/', estudianteController.createEstudiante); // crea una ruta para crear un estudiante

router.put('/:id', estudianteController.updateEstudiante); // crea una ruta para actualizar un estudiante

router.delete('/:id', estudianteController.deleteEstudiante); // crea una ruta para eliminar un estudiante

module.exports = router; // exporta el objeto router