const { db } = require('../db');

const Materias = {
    getAllMaterias: function(callback) {
        const consulta = 'SELECT * FROM materias';
        return db.query(consulta, callback);
    },
    getMateriaByName: function(nombre_materia, callback) {
        const consulta = 'SELECT * FROM materias WHERE nombre_materia = ?'
        return db.query(consulta, [nombre_materia], callback);
    },
    getMateriaByGrado: function(id_grado, callback) {
        const consulta = 'SELECT * FROM materias WHERE id_grado = ?'
        return db-query(consulta, [id_grado], callback);
    },
    getMateriaByProfesor: function(id_profesor, callback) {
        const consulta = `
        SELECT m.*
        FROM materias m
        INNER JOIN profesor_materia pm ON m.id_materia = pm.id_materia
        WHERE pm.id_profesor = ?
        `;
        return db.query(consulta, [id_profesor], callback);
    },
    asignarMateriaProfesor: function(id_profesor, id_materia, callback) {
        const consulta = 'INSERT INTO profesor_materia (id_profesor, id_materia) VALUES (?, ?)';
        return db.query(consulta, [id_profesor, id_materia], callback);
    },
    createMateria: function(materia, callback) {
        const consulta = `INSERT INTO materias (id_grado, nombre_materia) VALUES (?, ?)`;
        return db.query(consulta, [
            materia.id_grado,
            materia.nombre_materia
        ], callback);
    },
    updateMateria: function(materia, callback) {
        const consulta = `UPDATE materias SET
        id_grado = ?,
        materia_nombre = ?
        WHERE id_materia = ?
        `;
        return db.query(consulta, [
            materia.id_grado,
            materia.materia_nombre,
            materia.id_materia
        ], callback);
    },
    deleteMateria: function(id_materia, callback) {
        const consulta = 'DELETE FROM materias WHERE id_materia = ?';
        return db.query(consulta, [id_materia], callback);
    }
};

module.exports = { Materias };