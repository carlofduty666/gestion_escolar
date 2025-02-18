const { Profesores } = require('../models/profesores.model');

const getAllProfesores = (req, res) => {
    Profesores.getAllProfesores((err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).send(err);
            return;
        }
        res.send({ users: results });
    })
};

const getProfesorById = (req, res) => {
    let id_profesor = req.params.id_profesor;

    Profesores.getProfesorById(id_profesor, (err, result) => {
        if (err || !result[0]) {
            console.error('Error al buscar profesor por ID:', err);
            return res.status(404).send({ message: `No se encontró profesor con ID ${id_profesor}` });
        }
        res.send(result[0]);
    })
};

const getProfesorByName = (req, res) => {
    let nombre = req.params.nombre;

    Profesores.getProfesorByName(nombre, (err, result) => {
        if (err || !result[0]) {
            console.error('Error al buscar profesor por nombre:', err);
            return res.status(404).send({ message: `No se encontró profesor con el nombre: ${nombre}` });
        }
        res.send(result[0]);
    })
};

const createProfesor = (req, res) => {
    const nuevoProfesor = req.body;
    Profesores.createProfesor(nuevoProfesor, (err, result) => {
        if (err) {
            console.error('Error al crear profesor:', err);
            return res.status(500).send(err);
        }
        res.status(201).send({ message: 'Profesor creado', id: result.insertId });
    })
};

const updateProfesor = (req, res) => {
    const profesor = req.body;
    console.log(req.body);
    Profesores.updateProfesor(profesor, (err, result) => {
        if (err) {
            console.error('Error al actualizar el profesor:', err);
            return res.status(500).send(err);
        }
        res.send({ message: 'Profesor actualizado' });
    })
};

const deleteProfesor = (req, res) => {
    let id_profesor = req.params.id_profesor;
    Profesores.deleteProfesor(id_profesor, (err, result) => {
        if (err) {
            console.error('Error al eliminar profesor:', err);
            return res.status(500).send(err);
        }
        res.send({ message: 'Profesor eliminado' });
    })
}

module.exports = {
    getAllProfesores,
    getProfesorById,
    getProfesorByName,
    createProfesor,
    updateProfesor,
    deleteProfesor
};
