const { db } = require('../db');

const Calificaciones = {
    getAllCalificaciones: function(callback) {
        const consulta = 'SELECT * FROM calificaciones';
        return db.query(consulta, callback);
    },
    getCalificacionEstudiante: function(id_estudiante, callback) {
        const consulta = 'SELECT * FROM calificaciones WHERE id_estudiante = ?';
        return db.query(consulta, [id_estudiante], callback);
    },
    getCalificacionMateria: function(id_materia, callback) {
        const consulta = 'SELECT * FROM calificaciones WHERE id_materia = ?';
        return db.query(consulta, [id_materia], callback);
    },
    getCalificacionEvaluacion: function(id_evaluacion, callback) {
        const consulta = 'SELECT * FROM calificaciones WHERE id_evaluacion = ?';
        return db.query(consulta, [id_evaluacion], callback);
    },
    getCalificacionEstudianteMateria: function(id_estudiante, id_materia, callback) {
        const consulta = 'SELECT * FROM calificaciones WHERE id_estudiante = ? AND id_materia = ?';
        return db.query(consulta, [id_estudiante, id_materia], callback);
    },
    getCalificacionEstudianteEvaluacion: function(id_estudiante, id_evaluacion, callback) {
        const consulta = 'SELECT * FROM calificaciones WHERE id_estudiante = ? AND id_evaluacion = ?'
        return db.query(consulta, [id_estudiante, id_evaluacion], callback);
    },
    getcalificacionEvaluacionMateria: function(id_evaluacion, id_materia, callback) {
        const consulta = 'SELECT * FROM calificaciones WHERE id_evaluacion = ? AND id_materia = ?';
        return db.query(consulta, [id_evaluacion, id_materia], callback);
    },
    getCalificacionEstudianteMateriaEvaluacion: function(id_estudiante, id_materia, id_evaluacion, callback) {
        const consulta = 'SELECT * FROM calificaciones WHERE id_estudiante = ? AND id_materia = ? AND id_evaluacion';
        return db.query(consulta, [id_estudiante, id_materia, id_evaluacion], callback);
    },
        // Get average grade per student
    getPromedioEstudiante: function(id_estudiante, callback) {
        const consulta = 'SELECT id_estudiante, AVG(calificacion) as promedio FROM calificaciones WHERE id_estudiante = ? GROUP BY id_estudiante';
        return db.query(consulta, [id_estudiante], callback);
    },
    // Get top performing students
    getTopEstudiantes: function(limit, callback) {
        const consulta = 'SELECT id_estudiante, AVG(calificacion) as promedio FROM calificaciones GROUP BY id_estudiante ORDER BY promedio DESC LIMIT ?';
        return db.query(consulta, [limit], callback);
    },
    // Get grades by range
    getCalificacionesPorRango: function(min, max, callback) {
        const consulta = 'SELECT * FROM calificaciones WHERE calificacion BETWEEN ? AND ?';
        return db.query(consulta, [min, max], callback);
    },
    // Get failed subjects per student
    getMateriasReprobadas: function(id_estudiante, callback) {
        const consulta = 'SELECT id_materia, calificacion FROM calificaciones WHERE id_estudiante = ? AND calificacion < 6';
        return db.query(consulta, [id_estudiante], callback);
    },

    createCalificacion: function(calificacion, callback) {
        const consulta = 'INSERT INTO calificaciones (id_estudiante, id_materia, id_evaluacion, nota) VALUES (?, ?, ?, ?)';
        db.query(consulta, [
            calificacion.id_estudiante,
            calificacion.id_materia,
            calificacion.id_evaluacion,
            calificacion.nota
        ], callback);
    },

    updateCalificacion: function(nota, id_estudiante, id_materia, id_evaluacion, callback) {
        const consulta = 'UPDATE calificaciones SET nota = ? WHERE id_estudiante = ? AND id_materia = ? AND id_evaluacion = ?';
        return db.query(consulta, [nota, id_estudiante, id_materia, id_evaluacion], callback);
    },
    deleteCalificacion: function(id_estudiante, id_materia, id_evaluacion, callback) {
        const consulta = 'DELETE FROM calificaciones WHERE id_estudiante = ? AND id_materia = ? AND id_evaluacion = ?'
        return db.query(consulta, [id_estudiante, id_materia, id_evaluacion], callback);
    }
}

module.exports = { Calificaciones };