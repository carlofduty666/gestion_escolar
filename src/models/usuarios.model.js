const { db } = require('../db');

const Users = {
    getAllUsers: function(callback) {
        const consulta = 'SELECT * FROM usuarios';
        return db.query(consulta, callback);
    },
    getUserById: function(id_usuario, callback) {
        const consulta = 'SELECT * FROM usuarios WHERE id_usuario = ?';
        return db.query(consulta, [id_usuario], callback);
    },
    createUser: function(user, callback) {
        const consulta = `INSERT INTO usuarios (username, password, rol) VALUES (?, ?, ?)`;
        return db.query(consulta, [user.username, user.password, user.rol], callback);
    },
    updateUser: function(user, callback) {
        const consulta =  `UPDATE usuarios SET username = ?, password = ?, rol = ? WHERE id_usuario = ?`;
        return db.query(consulta, [user.username, user.password, user.rol, user.id_usuario], callback);
    },
    deleteUser: function(id_usuario, callback) {
        const consulta = 'DELETE FROM usuarios WHERE id_usuario = ?';
        return db.query(consulta, [id_usuario], callback);
    }
};

module.exports = { Users };