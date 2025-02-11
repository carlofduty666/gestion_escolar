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
    },

    updateProfesor: async (id, profesor) => {
        const [result] = await db.query(`UPDATE profesores SET
            cedula = ?, nombre = ?, apellido = ?
            WHERE id = ?`, [profesor.cedula, profesor.nombre, profesor.apellido, id]);
            return result.affectedRows;
    },

    deleteProfesor: async (id) => {
        const [result] = await db.query('DELETE FROM profesores WHERE id = ?', [id]);
        return result.affectedRows;
    }
}