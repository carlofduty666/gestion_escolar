const { db } = require('../db');

const Grados = {
    getAllGrados: function(callback) {
        const consulta = 'SELECT * FROM grados';
        return db.query(consulta, callback);
    },
    getGradoById: function(id_grado, callback) {
        const consulta = 'SELECT * FROM grados WHERE id_grado = ?';
        return db.query(consulta, [id_grado], callback);
    },
    getGradoByNombre: function(nombre_grado, callback) {
        const consulta = 'SELECT * FROM grados WHERE nombre_grado = ?';
        return db.query(consulta, [nombre_grado], callback);
    },
    createGrado: function(grado, callback) {
        const consulta = 'INSERT INTO grados (nombre_grado, id_nivel) VALUES (?, ?)';
        return db.query(consulta, [grado.nombre_grado, grado.id_nivel], callback);
    },
    updateGrado: function(grado, callback) {
        const consulta = 'UPDATE grados SET nombre_grado = ?, id_nivel = ? WHERE id_grado = ?';
        return db.query(consulta, [grado.nombre_grado, grado.id_nivel, grado.id_grado], callback);
    },
    deleteGrado: function(id_grado, callback) {
        const consulta = 'DELETE FROM grados WHERE id_grado = ?';
        return db.query(consulta, [id_grado], callback);
    }
};

module.exports = { Grados };