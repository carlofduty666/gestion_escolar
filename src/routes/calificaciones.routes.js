const express = require('express');
const router = express.Router();
const calificacionesController = require('../controllers/calificaciones.controller');

// Get all grades
router.get('/calificaciones', calificacionesController.getAllCalificaciones);

// Get grades by student
router.get('/calificaciones/estudiante/:id_estudiante', calificacionesController.getCalificacionEstudiante);

// Get grades by subject
router.get('/calificaciones/materia/:id_materia', calificacionesController.getCalificacionMateria);

// Get grades by evaluation
router.get('/calificaciones/evaluacion/:id_evaluacion', calificacionesController.getCalificacionEvaluacion);

// Get grades by student and subject
router.get('/calificaciones/estudiante/:id_estudiante/materia/:id_materia', calificacionesController.getCalificacionEstudianteMateria);

// Get grades by student and evaluation
router.get('/calificaciones/estudiante/:id_estudiante/evaluacion/:id_evaluacion', calificacionesController.getCalificacionEstudianteEvaluacion);

// Get grades by evaluation and subject
router.get('/calificaciones/evaluacion/:id_evaluacion/materia/:id_materia', calificacionesController.getcalificacionEvaluacionMateria);

// Get grades by student, subject and evaluation
router.get('/calificaciones/estudiante/:id_estudiante/materia/:id_materia/evaluacion/:id_evaluacion', calificacionesController.getCalificacionEstudianteMateriaEvaluacion);

// Get student average
router.get('/calificaciones/promedio/:id_estudiante', calificacionesController.getPromedioEstudiante);

// Get top students
router.get('/calificaciones/top/:estudiantes', calificacionesController.getTopEstudiantes);

// Get grades by range
router.get('/calificaciones/rango/:calificacion_minima/:calificacion_maxima', calificacionesController.getCalificacionesPorRango);

// Get failed subjects
router.get('/calificaciones/reprobadas/:id_estudiante', calificacionesController.getMateriasReprobadas);

// Create grade
router.post('/calificaciones', calificacionesController.createCalificacion);

// Update grade
router.put('/calificaciones', calificacionesController.updateCalificacion);

// Delete grade
router.delete('/calificaciones/:id_calificacion', calificacionesController.deleteCalificacion);

module.exports = router;
