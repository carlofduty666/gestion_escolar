const db = require('../db');
const pool = require('../db');

const EstudianteModel = {
    getAllEstudiantes: async () => {
        const [filas] = await db.query('SELECT * FROM estudiantes');
        return filas;
    },

    getEstudiandteById: async (id) => {
        const [filas] = await db.query('SELECT * FROM estudiantes WHERE id = ?', [id]);
        return filas[0];
    },

    // CODIGO LIGERAMENTE INSEGURO
    // createEstudiante: async (estudiante) => {
    //     const [filas] = await db.query(`
    //         INSERT INTO estudiantes
    //         (nombres, apellidos,
    //         fecha_nacimiento, edad,
    //         cedula, direccion,
    //         telefono, correo,
    //         notas_adicionales)

    //         VALUES
    //         ("${estudiante.nombres}", "${estudiante.apellidos}",
    //         "${estudiante.fecha_nacimiento}", "${estudiante.edad}",
    //         "${estudiante.cedula}", "${estudiante.direccion}",
    //         "${estudiante.telefono}", "${estudiante.correo}",
    //         "${estudiante.notas_adicionales}") `);
    //     return filas.insertId;
    // }

    createEstudiante: async (estudiante) => {
        const [result] = await pool.query(
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
    }
}



module.exports = db