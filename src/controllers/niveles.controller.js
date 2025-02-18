const { Niveles } = require('../models/niveles.model');

const getAllNiveles = (req, res) => {
    Niveles.getAllNiveles((err, result) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).send(err);
            return;
        }
        res.send({ niveles: result });
    })
};

const createNivel = (req, res) => {
    const nuevoNivel = req.body;
    Niveles.createNivel(nuevoNivel, (err, result) => {
        if (err) {
            console.error('Error al crear nivel:', err);
            return res.status(500).send(err);
        }
        res.status(201).send({ message: 'Nivel creado', id: result.insertId });
    })
};

const updateNivel = (req, res) => {
    const nivel = req.body;
    Niveles.updateNivel(nivel, (err, result) => {
        if (err) {
            console.error('Error al actualizar nivel:', err);
            return res.status(500).send(err);
        }
        res.send({ message: 'Nivel actualizado' });
    })
};

const deleteNivel = (req, res) => {
    let id_nivel = req.params.id_nivel;
    Niveles.deleteNivel(id_nivel, (err, result) => {
        if (err) {
            console.error('Error al eliminar nivel:', err);
            return res.status(500).send(err);
        }
        res.send({ message: 'Nivel eliminado' });
    })
};

module.exports = { 
    getAllNiveles, 
    createNivel, 
    updateNivel,
    deleteNivel
};