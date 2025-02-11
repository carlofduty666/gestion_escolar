const db = require('../db');

const EstudianteModel = {
    getAllEstudiantes: async () => {
        const [filas] = await db.query('SELECT * FROM estudiantes');
        return filas;
    },

    getEstudiandteById: async (id) => {
        const [filas] = await db.query('SELECT * FROM estudiantes WHERE id = ?', [id]);
        return filas[0];
    },

    createEstudiante: async (estudiante) => {
        const [result] = await db.query(
            `INSERT INTO estudiantes 
            (nombres, apellidos, fecha_nacimiento, edad, cedula, direccion, telefono, correo, notas_adicionales) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                estudiante.nombres,
                estudiante.apellidos,
                estudiante.fecha_nacimiento,
                estudiante.edad,
                estudiante.cedula,
                estudiante.direccion,
                estudiante.telefono,
                estudiante.correo,
                estudiante.notas_adicionales
            ]
        );
        return result.insertId;
    },

    updateEstudiante: async (id, estudiante) => {
        const [result] = await db.query(
            `UPDATE estudiantes SET
            nombres = ?, apellidos = ?, fecha_nacimiento = ?, edad = ?, cedula = ?, direccion = ?, telefono = ?, correo = ?, notas_adicionales = ?
            WHERE id = ?`,
            [
                estudiante.nombres,
                estudiante.apellidos,
                estudiante.fecha_nacimiento,
                estudiante.edad,
                estudiante.cedula,
                estudiante.direccion,
                estudiante.telefono,
                estudiante.correo,
                estudiante.notas_adicionales,
                id
            ]
        );
        return result.affectedRows > 0;
    },

    deleteEstudiante: async (id) => {
        const [result] = await db.query(
            `DELETE FROM estudiantes WHERE id = ?`,
            [id]
        );
        return result.affectedRows > 0;
    }
}



module.exports = EstudianteModel