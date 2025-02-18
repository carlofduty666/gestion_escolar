const { db } = require('../db');

const Niveles = {
    getAllNiveles: function(callback) {
        const consulta = 'SELECT * FROM niveles';
        return db.query(consulta, callback);
    },
    createNivel: function(nivel, callback) {
        const consulta = `INSERT INTO niveles (nombre_nivel) VALUES (?)`;
        return db.query(consulta, [nivel.nombre_nivel], callback);
    },
    updateNivel: function(nivel, callback) {
        const consulta = `UPDATE niveles SET nombre_nivel = ? WHERE id_nivel = ?`;
        return db.query(consulta, [nivel.nombre_nivel, nivel.id_nivel], callback);
    },
    deleteNivel: function(id_nivel, callback) {
        const consulta = 'DELETE FROM niveles WHERE id_nivel = ?'
        return db.query(consulta, [id_nivel], callback);
    }
};

module.exports = { Niveles };