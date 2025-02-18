const { Users } = require('../models/usuarios.model');

const getAllUser = (req, res) => {
    Users.getAllUsers((err, result) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).send(err);
            return;
        }
        res.send({ users: result });
    })
};

const getUserById = (req, res) => {

    let id_usuario = req.params.id_usuario;

    Users.getUserById(id_usuario, (err, result) => {
        if (err || !result[0]) {
            console.error('Error al buscar usuario por ID:', err);
            return res.status(404).send({ message: `No se encontró usuario con ID ${id_usuario}` });
        }
        res.send(result[0]);
    })
};

const createUser = (req, res) => {

    const newUser = req.body;

    Users.createUser(newUser, (err, result) => {
        if (err) {
            console.error('Error al crear usuario:', err);
            return res.status(500).send(err);
        }
        res.status(201).send({ message: 'Usuario creado', id: result.insertId });
    })
};

const updateUser = (req, res) => {
    const user = req.body;

    Users.updateUser(user, (err, result) => {
        if (err) {
            console.error('Error al actualizar usuario:', err);
            return res.status(500).send(err);
        }
        res.send({ message: 'Usuario actualizado' });
    })
}

const deleteUser = (req, res) => {
    let id_usuario = req.params.id_usuario;
    Users.deleteUser(id_usuario, (err, result) => {
        if (err) {
            console.error('Error al eliminar usuario:', err);
            return res.status(500).send(err);
        }
        res.send({ message: 'Usuario eliminado' });
    })
};

module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};