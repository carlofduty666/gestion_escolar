const { Materias } = require('../models/materias.model');
const { Grados } = require('../models/grados.model');
const { Profesores } = require('../models/profesores.model');

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
            return res.status(404).send({ message: `No se encontro la materia "${nombre_materia}`})
        }
        res.send(result[0]);
    });
};

const getMateriaByGrado = (req, res) => {

    let nombre_grado = req.params.nombre_grado;
    
    Grados.getGradoByNombre(nombre_grado, (err, grado) => {
        if (err) {
            return res.status(500).send({ message: 'Error al buscar el grado' });
        }
        
        Materias.getMateriaByGrado(grado.id_grado, (err, result) => {
            if (err || !result[0]) {
                return res.status(404).send({ 
                    message: `No hay materias para ${nombre_grado} grado`
                });
            }
            res.json(result);
        });
    });
};

const getMateriaByProfesor = (req, res) => {
    let id_profesor = req.params.id_profesor;
    
    // Primero verificamos que el profesor existe
    Profesores.getProfesorById(id_profesor, (err, profesor) => {
        if (err) {
            return res.status(500).send({ message: 'Error al buscar el profesor' });
        }
        if (!profesor[0]) {
            return res.status(404).send({ message: `No se encontró el profesor con ID ${id_profesor}` });
        }

        // Luego buscamos sus materias
        Materias.getMateriaByProfesor(id_profesor, (err, result) => {
            if (err) {
                return res.status(500).send({ message: 'Error al buscar las materias del profesor' });
            }
            if (!result[0]) {
                return res.status(404).send({ 
                    message: `No se encontraron materias asignadas al profesor ${profesor[0].nombres} ${profesor[0].apellidos}` 
                });
            }
            res.json(result);
        });
    });
};

const asignarMateriaProfesor = (req, res) => {
    const { id_profesor, id_materia } = req.body;

    // Verificar que existe el profesor
    Profesores.getProfesorById(id_profesor, (err, profesor) => {
        if (err) {
            return res.status(500).send({ message: 'Error al verificar el profesor' });
        }
        if (!profesor[0]) {
            return res.status(404).send({ message: `No existe el profesor con ID ${id_profesor}` });
        }

        // Verificar que existe la materia
        Materias.getMateriaById(id_materia, (err, materia) => {
            if (err) {
                return res.status(500).send({ message: 'Error al verificar la materia' });
            }
            if (!materia[0]) {
                return res.status(404).send({ message: `No existe la materia con ID ${id_materia}` });
            }

            // Asignar la materia al profesor
            Materias.asignarMateriaProfesor(id_profesor, id_materia, (err, result) => {
                if (err) {
                    if (err.code === 'ER_DUP_ENTRY') {
                        return res.status(400).send({ message: 'Esta materia ya está asignada a este profesor' });
                    }
                    return res.status(500).send({ message: 'Error al asignar la materia' });
                }
                res.status(201).json({ 
                    message: `Materia ${materia[0].nombre_materia} asignada exitosamente al profesor ${profesor[0].nombres} ${profesor[0].apellidos}`
                });
            });
        });
    });
};

const createMateria = (req, res) => {
    const materiaNueva = req.body;
    Materias.createMateria(materiaNueva, (err, result) => {
        if (err) {
            console.error('Error al crear la materia:', err);
            return res.status(500).send(err);
        }
        res.status(201).send({ message: 'Materia creada', id: result.insertId });
    })
};

const updateMateria = (req, res) => {
    const materia = req.body;
    Materias.updateMateria(materia, (err, result) => {
        if(err) {
            console.error('Error al actualizar la materia:', err);
            return res.status(500).send(err);
        }
        res.send({ message: 'Materia actualizada' });
    })
}

const deleteMateria = (req, res) => {
    let id_materia = req.params.id_materia;
    Materias.deleteMateria(id_materia, (err, result) => {
        if (err) {
            console.error('Error al eliminar la materia:', err);
            return res.status(500).send(err);
        }
        res.send({ message: 'Materia eliminada' });
    })
    
}

module.exports = {
    getAllMaterias,
    getMateriaByName,
    getMateriaByGrado,
    getMateriaByProfesor,
    asignarMateriaProfesor,
    createMateria,
    updateMateria,
    deleteMateria
};
