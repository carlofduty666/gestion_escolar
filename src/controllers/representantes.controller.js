const { Representantes } = require('../models/representantes.model');

const getAllRepresentantes = (req, res) => {
    Representantes.getAllRepresentantes((err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).send(err);
            return;
        }
        res.send({ representantes: results }); // el users puede tener cualquier nombre porque es un objeto
    });
};

const  getRepresentanteById = (req, res) => {
    let id_representante = req.params.id_representante;

    Representantes.getRepresentanteById(id_representante, (err, result) => {
        if (err || !result[0]) {
            console.error('Error al buscar representante por ID:', err);
            return res.status(404).send({ message: `No se encontró representante con ID ${id_representante}` });
        }
        res.send(result[0]);
    });
};

const getRepresentanteByCedula = (req, res) => {
    let cedula = req.params.cedula;
    Representantes.getRepresentanteByCedula(cedula, (err, result) => {
        if (err || !result[0]) {
            console.error('Error al buscar representante por cédula:', err);
            return res.status(404).send({ message: `No se encontró representante con cédula ${cedula}` });
        }
        res.send(result[0]);
    });
};

const createRepresentante = (req, res) => {
    const nuevoRepresentante = req.body;
    Representantes.createRepresentante(nuevoRepresentante, (err, result) => {
        if (err) {
            console.error('Error al crear representante:', err);
            return res.status(500).send(err);
        }
        res.status(201).send({ message: 'Representante creado', id: result.insertId });
    });
};

const updateRepresentante = (req, res) => {
    const representante = req.body;
    Representantes.updateRepresentante(representante, (err, result) => {
        if (err) {
            console.error('Error al actualizar representante:', err);
            return res.status(500).send(err);
        }
        res.send({ message: 'Representante actualizado' });
    });
};

const deleteRepresentante = (req, res) => {
    let id_representante = req.params.id_representante;
    Representantes.deleteRepresentante(id_representante, (err, result) => {
        if (err) {
            console.error('Error al eliminar representante:', err);
            return res.status(500).send(err);
        }
        res.send({ message: 'Representante eliminado' });
    });
};

module.exports = {
    getAllRepresentantes,
    getRepresentanteById,
    getRepresentanteByCedula,
    createRepresentante,
    updateRepresentante,
    deleteRepresentante
};