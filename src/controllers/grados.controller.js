const { Grados } = require('../models/grados.model');

const getAllGrados = (req, res) => {
    Grados.getAllGrados((err, result) => {
        if (err) {
            console.error('Error al obtener los grados:', err);
            return res.status(500).send(err);
        }
        res.send({ grados: result });
    })
};

const createGrado = (req, res) => {
    const nuevoGrado = req.body;
    Grados.createGrado(nuevoGrado, (err, result) => {
        if (err) {
            console.error('Error al crear el grado:', err);
            return res.status(500).send(err);
        }
        res.status(201).send({ message: 'Grado creado', id: result.insertId });
    });
};

const updateGrado = (req, res) => {
    const grado = req.body;
    Grados.updateGrado(grado, (err, result) => {
        if (err) {
            console.error('Error al actualizar el grado:', err);
            return res.status(500).send(err);
        }
        res.send({ message: 'Grado actualizado' });
    });
};

const deleteGrado = (req, res) => {
    const id_grado = req.params.id_grado;
    Grados.deleteGrado(id_grado, (err, result) => {
        if (err) {
            console.error('Error al eliminar el grado:', err);
            return res.status(500).send(err);
        }
        res.send({ message: 'Grado eliminado' });
    });
};

module.exports = {
    getAllGrados,
    createGrado,
    updateGrado,
    deleteGrado
};