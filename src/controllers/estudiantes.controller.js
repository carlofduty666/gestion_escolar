const Estudiante = require('../models/estudiantes.model'); // importa el modelo de estudiantes

const estudianteController = { // crea un objeto con los métodos del controlador
    getAllEstudiantes: async (req, res) => { /// crea un método para obtener todos los estudiantes
        try {
            const estudiantes = await Estudiante.getAllEstudiantes(); // obtiene todos los estudiantes
            res.json(estudiantes); // devuelve los estudiantes en formato JSON
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener los estudiantes' });
        }
    },

    getEstudiandteById: async (req, res) => {
        const { id } = req.params;
        try {
            const estudiante = await Estudiante.getEstudiandteById(id);
            if (estudiante) {
                res.json(estudiante);
            } else {
                res.status(404).json({ message: 'Estudiante no encontrado' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener el estudiante' });
        }
    },

    createEstudiante: async (req, res) => {
        const estudiante = req.body;
        try {
            const id = await Estudiante.createEstudiante(estudiante);
            res.status(201).json({ id });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al crear el estudiante' });
        }
    },

    updateEstudiante: async (req, res) => {
        const { id } = req.params;
        const estudiante = req.body;
        try {
            const result = await Estudiante.updateEstudiante(id, estudiante);
            if (result) {
                res.json({ message: 'Estudiante actualizado' });
            } else {
                res.status(404).json({ message: 'Estudiante no encontrado' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al actualizar el estudiante' });
        }
    },

    deleteEstudiante: async (req, res) => {
        const { id } = req.params;
        try {
            const result = await Estudiante.deleteEstudiante(id);
            if (result) {
                res.json({ message: 'Estudiante eliminado' });
            } else {
                res.status(404).json({ message: 'Estudiante no encontrado' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar el estudiante' });
        }
    }
}



module.exports = estudianteController; // exporta el objeto con los métodos del controlador