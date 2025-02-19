const { Materias } = require('../models/materias.model');

const getAllMaterias = (req, res) => {

    Materias.getAllMaterias((err, result) => {

        if (err) {
            console.error('Error al obtener las materias:', err)
            res.status(500).send({err});
            return;
        }
        res.send({ materias: result});
    });
};

const getMateriaByName = (req, res) => {

    let nombre_materia = req.params.nombre_materia

    Materias.getMateriaByName(nombre_materia, (err, result) => {
        if (err || !result[0]) {
            console.error('Error al buscar la materia:', err);
            return res.status(404).sned({ message: `No se encontro la materia "${nombre_materia}`})
        }
        res.send(result[0]);
    });
};

const getMateriaByGrado = (req, res) => {

}

const getMateriaByProfesor = (req, res) => {

}

const asignarMateriaProfesor = (req, res) => {

}

module.exports = {
    
}

