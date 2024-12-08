const db = require("../config/db");

const getEstudiantes = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM estudiantes');
        res.status(200).json({
            success: true,
            data: rows,
        });
    } catch (err) {
        console.error('Error al obtener los estudiantes: ', err);
        res.status(500).json({ success: false, error: 'Error al obtener los estudiantes' });
    }
};

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

module.exports = { getEstudiantes, createEstudiante };