const { Calificaciones } = require('../models/calificaciones.model');

const getAllCalificaciones = (req, res) => {
    Calificaciones.getAllCalificaciones((err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).send(err);
            return;
        }
        res.send({ calificaciones: results });
    });
};

const getCalificacionEstudiante = (req, res) => {
    let id_estudiante = req.params.id_estudiante;
    Calificaciones.getCalificacionEstudiante(id_estudiante, (err, result) => {
        if (err || !result[0]) {
            console.error('Error al buscar calificación por ID del estudiante:', err);
            return res.status(404).send({ message: `No se encontró calificación para el estudiante con ID ${id_estudiante}` });
        }
        res.send(result[0]);
    });
};

const getCalificacionMateria = (req, res) => {
    let id_materia = req.params.id_materia;
    Calificaciones.getCalificacionMateria(id_materia, (err, result) => {
        if (err || !result[0]) {
            console.error('Error al buscar calificación por ID de la materia:', err);
            return res.status(404).send({ message: `No se encontró calificación para la materia con ID ${id_materia}` });
        }
        res.send(result[0]);
    });
};

const getCalificacionEvaluacion = (req, res) => {
    let id_evaluacion = req.params.id_evaluacion;
    Calificaciones.getCalificacionEvaluacion(id_evaluacion, (err, result) => {
        if (err || !result[0]) {
            console.error('Error al buscar calificación por ID de la evaluación:', err);
            return res.status(404).send({ message: `No se encontró calificación para la evaluación con ID ${id_evaluacion}` });
        }
        res.send(result[0]);
    });
};

const getCalificacionEstudianteMateria = (req, res) => {
    let id_estudiante = req.params.id_estudiante;
    let id_materia = req.params.id_materia;
    Calificaciones.getCalificacionEstudianteMateria(id_estudiante, id_materia, (err, result) => {
        if (err || !result[0]) {
            console.error('Error al buscar calificación por ID del estudiante y materia:', err);
            return res.status(404).send({ message: `No se encontró calificación para el estudiante con ID ${id_estudiante} y materia con ID ${id_materia}` });
        }
        res.send(result[0]);
    });
};

const getCalificacionEstudianteEvaluacion = (req, res) => {
    let id_estudiante = req.params.id_estudiante;
    let id_evaluacion = req.params.id_evaluacion;
    Calificaciones.getCalificacionEstudianteEvaluacion(id_estudiante, id_evaluacion, (err, result) => {
        if (err || !result[0]) {
            console.error('Error al buscar calificación por ID del estudiante y evaluación:', err);
            return res.status(404).send({ message: `No se encontró calificación para el estudiante con ID ${id_estudiante} y evaluación con ID ${id_evaluacion}` });
        }
        res.send(result[0]);
    });
};

const getcalificacionEvaluacionMateria = (req, res) => {
    let id_evaluacion = req.params.id_evaluacion;
    let id_materia = req.params.id_materia;
    Calificaciones.getcalificacionEvaluacionMateria(id_evaluacion, id_materia, (err, result) => {
        if (err || !result[0]) {
            console.error('Error al buscar calificación por ID de la evaluación y materia:', err);
            return res.status(404).send({ message: `No se encontró calificación para la evaluación con ID ${id_evaluacion} y materia con ID ${id_materia}` });
        }
        res.send(result[0]);
    });
};

const getCalificacionEstudianteMateriaEvaluacion = (req, res) => {
    let id_estudiante = req.params.id_estudiante;
    let id_materia = req.params.id_materia;
    let id_evaluacion = req.params.id_evaluacion;
    Calificaciones.getCalificacionEstudianteMateriaEvaluacion(id_estudiante, id_materia, id_evaluacion, (err, result) => {
        if (err || !result[0]) {
            console.error('Error al buscar calificación por ID del estudiante, materia y evaluación:', err);
            return res.status(404).send({ message: `No se encontró calificación para el estudiante con ID ${id_estudiante}, materia con ID ${id_materia} y evaluación con ID ${id_evaluacion}` });
        }
        res.send(result[0]);
    });
};

const getPromedioEstudiante = (req, res) => {
    let id_estudiante = req.params.id_estudiante;
    Calificaciones.getPromedioEstudiante(id_estudiante, (err, result) => {
        if (err || !result[0]) {
            console.error('Error al buscar promedio del estudiante:', err);
            return res.status(404).send({ message: `No se encontró promedio para el estudiante con ID ${id_estudiante}` });
        }
        res.send(result[0]);
    });
};

const getTopEstudiantes = (req, res) => {
    let mejorEstudiante = req.params.mejorEstudiante;
    Calificaciones.getTopEstudiantes(mejorEstudiante, (err, result) => {
        if (err || !result[0]) {
            console.error('Error al buscar los mejores estudiantes:', err);
            return res.status(404).send({ message: `No se encontraron los mejores estudiantes` });
        }
        res.send(result);
    });
};

const getCalificacionesPorRango = (req, res) => {
    let id_estudiante = req.params.id_estudiante;
    let id_materia = req.params.id_materia;
    let id_evaluacion = req.params.id_evaluacion;
    let calificacion_minima = req.params.calificacion_minima;
    let calificacion_maxima = req.params.calificacion_maxima;
    Calificaciones.getCalificacionesPorRango(id_estudiante, id_materia, id_evaluacion, calificacion_minima, calificacion_maxima, (err, result) => {
        if (err || !result[0]) {
            console.error('Error al buscar calificaciones por rango:', err);
            return res.status(404).send({ message: `No se encontraron calificaciones por rango` });
        }
        res.send(result);
    });
};

const getMateriasReprobadas = (req, res) => {
    let id_estudiante = req.params.id_estudiante;
    Calificaciones.getMateriasReprobadas(id_estudiante, (err, result) => {
        if (err || !result[0]) {
            console.error('Error al buscar materias reprobadas:', err);
            return res.status(404).send({ message: `No se encontraron materias reprobadas para el estudiante con ID ${id_estudiante}` });
        }
        res.send(result);
    });
};

const createCalificacion = (req, res) => {
    const nuevaCalificacion = req.body;

    Calificaciones.createCalificacion(nuevaCalificacion, (err, result) => {
        if (err) {
            console.error('Error al crear calificación:', err);
            return res.status(500).send(err);
        }
        res.status(201).send({ message: 'Calificación creada', id: result.insertId });
    })
};

const updateCalificacion = (req, res) => {
    const calificacion = req.body;
    Calificaciones.updateCalificacion(calificacion, (err, result) => {
        if (err) {
            console.error('Error al actualizar calificación:', err);
            return res.status(500).send({ message: 'Error al actualizar calificación' });
        }
        res.send({ message: 'Calificación actualizada exitosamente' });
    });
};

// const createCalificacion = (req, res) => {
//     const { id_estudiante, id_materia, id_evaluacion, nota } = req.body;
    
//     Calificaciones.createCalificacion(id_estudiante, id_materia, id_evaluacion, nota, (err, result) => {
//         if (err) {
//             console.error('Error al crear calificación:', err);
//             return res.status(500).send(err);
//         }
//         res.status(201).send({ 
//             message: 'Calificación creada exitosamente',
//             id: result.insertId 
//         });
//     });
// };

// const updateCalificacion = (req, res) => {
//     const { id_calificacion, id_estudiante, id_materia, id_evaluacion, nota } = req.body;
//     Calificaciones.updateCalificacion(id_calificacion, id_estudiante, id_materia, id_evaluacion, nota, (err, result) => {
//         if (err) {
//             console.error('Error al actualizar calificación:', err);
//             return res.status(500).send({ message: 'Error al actualizar calificación' });
//         }
//         res.send({ message: 'Calificación actualizada exitosamente' });
//     });
// };

const deleteCalificacion = (req, res) => {
    let id_calificacion = req.params.id_calificacion;
    Calificaciones.deleteCalificacion(id_calificacion, (err, result) => {
        if (err) {
            console.error('Error al eliminar calificación:', err);
            return res.status(500).send({ message: 'Error al eliminar calificación' });
        }
        res.send({ message: 'Calificación eliminada exitosamente' });
    });
};

module.exports = {
    getAllCalificaciones,
    getCalificacionEstudiante,
    getCalificacionMateria,
    getCalificacionEvaluacion,
    getCalificacionEstudianteMateria,
    getCalificacionEstudianteEvaluacion,
    getcalificacionEvaluacionMateria,
    getCalificacionEstudianteMateriaEvaluacion,
    getPromedioEstudiante,
    getTopEstudiantes,
    getCalificacionesPorRango,
    getMateriasReprobadas,
    createCalificacion,
    updateCalificacion,
    deleteCalificacion
}