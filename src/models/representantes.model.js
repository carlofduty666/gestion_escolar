const { db } = require('../db');

const Representantes = {
    getAllRepresentantes: function(callback) {
        const consulta = 'SELECT * FROM representantes';
        return db.query(consulta, callback);
    },
    getRepresentanteById: function(id_representante, callback) {
        const consulta = 'SELECT * FROM representantes WHERE id_representante = ?';
        return db.query(consulta, [id_representante], callback);
    },
    getRepresentanteByCedula: function(cedula, callback) {
        const consulta = 'SELECT * FROM representantes WHERE cedula = ?';
        return db.query(consulta, [cedula], callback);
    },
    createRepresentante: function(representante, callback) {
        const consulta = `INSERT INTO representantes (nombres, apellidos, cedula) VALUES (?, ?, ?)`;
        return db.query(consulta, [
            representante.nombres,
            representante.apellidos,
            representante.cedula
        ], callback);
    },
    updateRepresentante: function(representante, callback) {
        const consulta = `UPDATE representantes SET nombres = ?, apellidos = ?, cedula = ? WHERE id_representante = ?`;
        return db.query(consulta, [
            representante.nombres,
            representante.apellidos,
            representante.cedula,
            representante.id_representante
        ], callback);
    },
    deleteRepresentante: function(id_representante, callback) {
        const consulta = 'DELETE FROM representantes WHERE id_representante = ?';
        return db.query(consulta, [id_representante], callback);
    }
};

module.exports = { Representantes };