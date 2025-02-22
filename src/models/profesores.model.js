const { db } = require('../db');

const Profesores = {
    getAllProfesores: function(callback) {
        const consulta = 'SELECT * FROM profesores';
        return db.query(consulta, callback);
    },
    getProfesorById: function(id_profesor, callback) {
        const consulta = 'SELECT * FROM profesores WHERE id_profesor = ?';
        return db.query(consulta, [id_profesor], callback);
    },
    getProfesorByName: function(nombre, callback) {
        const consulta = 'SELECT * FROM profesores WHERE nombre = ?';
        return db.query(consulta, [nombre], callback);
    },
    createProfesor: function(profesor, callback) {
        const consulta = `INSERT INTO profesores (cedula, nombre, apellido) VALUES (?, ?, ?)`;
        return db.query(consulta, [
            profesor.cedula,
            profesor.nombre,
            profesor.apellido
        ], callback);
    },
    updateProfesor: function(profesor, callback) {
        const consulta = `UPDATE profesores SET 
            cedula = ?,
            nombre = ?,
            apellido = ?
            WHERE id_profesor = ?`;
    
        return db.query(consulta, [
            profesor.cedula,
            profesor.nombre,
            profesor.apellido
        ], callback);
    },
    deleteProfesor: function(id_profesor, callback) {
        const consulta = 'DELETE FROM profesores WHERE id_profesor = ?';
        return db.query(consulta, [id_profesor], callback);
    }
};

module.exports = { Profesores }