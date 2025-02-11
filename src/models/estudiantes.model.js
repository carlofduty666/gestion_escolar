const { db } = require('../db');

const Estudiantes = {
    getAllEstudiantes: function(callback) {
        const consulta = 'SELECT * FROM estudiantes';
        return db.query(consulta, callback);
    },
    getEstudianteById: function(id, callback) {
        const consulta = 'SELECT * FROM estudiantes WHERE id = ?';
        return db.query(consulta, [id], callback);
    },
    createEstudiante: function(estudiante, callback) {
        const consulta = `INSERT INTO estudiantes (nombres, apellidos, fecha_nacimiento, edad, cedula, direccion, telefono, correo, notas_adicionales) VALUES (?, ?, STR_TO_DATE(REPLACE(?, '/', '-'), '%d-%m-%Y'), ?, ?, ?, ?, ?, ?)`;
        return db.query(consulta, [
            estudiante.nombres,
            estudiante.apellidos,
            estudiante.fecha_nacimiento,
            estudiante.edad,
            estudiante.cedula,
            estudiante.direccion,
            estudiante.telefono,
            estudiante.correo,
            estudiante.notas_adicionales
        ], callback);
    },
    updateEstudiante: function(estudiante, callback) {
        const consulta = `UPDATE estudiantes SET 
            nombres = ?, 
            apellidos = ?, 
            fecha_nacimiento = STR_TO_DATE(REPLACE(?, '/', '-'), '%d-%m-%Y'), 
            edad = ?, 
            cedula = ?, 
            direccion = ?, 
            telefono = ?, 
            correo = ?, 
            notas_adicionales = ? 
            WHERE id_estudiante = ?`;
    
        return db.query(consulta, [
            estudiante.nombres,
            estudiante.apellidos,
            estudiante.fecha_nacimiento,
            estudiante.edad,
            estudiante.cedula,
            estudiante.direccion,
            estudiante.telefono,
            estudiante.correo,
            estudiante.notas_adicionales,
            estudiante.id_estudiante
        ], callback);
    },
    deleteEstudiante: function(id, callback) {
        const consulta = 'DELETE FROM estudiantes WHERE id = ?';
        return db.query(consulta, [id], callback);
    }
};

module.exports = { Estudiantes }

    // createEstudiante: async (estudiante) => {
    //     const [result] = await db.query(
    //         `INSERT INTO estudiantes 
    //         (nombres, apellidos, fecha_nacimiento, edad, cedula, direccion, telefono, correo, notas_adicionales) 
    //         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    //         [
    //             estudiante.nombres,
    //             estudiante.apellidos,
    //             estudiante.fecha_nacimiento,
    //             estudiante.edad,
    //             estudiante.cedula,
    //             estudiante.direccion,
    //             estudiante.telefono,
    //             estudiante.correo,
    //             estudiante.notas_adicionales
    //         ]
    //     );
    //     return result.insertId;
    // }

    // updateEstudiante: async (id, estudiante) => {
    //     const [result] = await db.query(
    //         `UPDATE estudiantes SET
    //         nombres = ?, apellidos = ?, fecha_nacimiento = ?, edad = ?, cedula = ?, direccion = ?, telefono = ?, correo = ?, notas_adicionales = ?
    //         WHERE id = ?`,
    //         [
    //             estudiante.nombres,
    //             estudiante.apellidos,
    //             estudiante.fecha_nacimiento,
    //             estudiante.edad,
    //             estudiante.cedula,
    //             estudiante.direccion,
    //             estudiante.telefono,
    //             estudiante.correo,
    //             estudiante.notas_adicionales,
    //             id
    //         ]
    //     );
    //     return result.affectedRows > 0;
    // }

    // deleteEstudiante: async (id) => {
    //     const [result] = await db.query(
    //         `DELETE FROM estudiantes WHERE id = ?`,
    //         [id]
    //     );
    //     return result.affectedRows > 0;
    // }



// module.exports = EstudianteModel