const { db } = require('../db');

const Materias = {
    getAllMaterias: function(callback) {
        const consulta = 'SELECT * FROM matricula';
        return db.query(consulta, callback);
    },
    getMateriaByName: function(nombre_materia, callback) {
        const consulta = 'SELECT * FROM matricula WHERE nombre_materia = ?'
        return db.query(consulta, [nombre_materia], callback);
    },
    getMateriaByGrado: function(id_grado, callback) {
        const consulta = 'SELECT * FROM matricula WHERE id_grado = ?'
        return db-query(consulta, [id_grado], callback);
    },
    getMateriaByProfesor: function(id_profesor, callback) {
        const consulta = `
        SELECT m.*
        FROM matricula m
        INNER JOIN profesor_materia pm ON m.id_materia = pm.id_materia
        WHERE pm.id_profesor = ?
        `;
        return db.query(consulta, [id_profesor], callback);
    },
    asignarMateriaProfesor: function(id_profesor, id_materia, callback) {
        const consulta = 'INSERT INTO profesor_materia (id_profesor, id_materia) VALUES (?, ?)';
        return db.query(consulta, [id_profesor, id_materia], callback);
    }
};

module.exports = { Materias };