const db = require("../config/db");

// Aqui crea tu endpoint GET para obtener todos los estudiantes (getEstudiantes)

const createEstudiante = async (req, res) => {
    const { nombre, apellidos, email, matricula, edad, semestre } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO estudiantes (nombre, apellidos, email, matricula, edad, semestre) VALUES (?, ?, ?, ?, ?, ?)',
            [nombre, apellidos, email, matricula, edad, semestre]
        );
        res.status(201).json({ id:result.insertId, message: 'Estudiante creado exitosamente' });
    } catch (err) {
        console.error('Error al crear el estudiante: ', err);
        res.status(500).json({ error: 'Error al crear el estudiante' });
    }
};

module.exports = { createEstudiante };