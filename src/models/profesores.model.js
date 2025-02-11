const db  = require('../db');

const ProfesorModel = {
    getAllProfesores: async () => {
        const [filas] = await db.query('SELECT * FROM profesores');
        return filas;
    },

    getProfesorById: async (id) => {
        const [filas] = await db.query('SELECT * FROM profesores WHERE id = ?', [id]);
        return filas[0];
    },

    createProfesor: async (profesor) => {
        const [result] = await db.query(`INSERT INTO profesores (
            cedula, nombre, apellido)
            VALUES (?, ?, ?)`, [profesor]);
            return result.insertId;
    }
}