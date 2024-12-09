const db = require("../config/db");

// Obtener todas las materias
const getMaterias = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM materias');
        res.status(200).json({
            success: true,
            data: rows,
        });
    } catch (err) {
        console.error('Error al obtener las materias: ', err);
        res.status(500).json({ success: false, error: 'Error al obtener las materias' });
    }
};

// Crear una materia
const createMateria = async (req, res) => {
    const { nombre, profesor_id } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO materias (nombre, profesor_id, create_date) VALUES (?, ?, NOW())',
            [nombre, profesor_id]
        );
        res.status(201).json({ id: result.insertId, message: 'Materia creada exitosamente' });
    } catch (err) {
        console.error('Error al crear la materia: ', err);
        res.status(500).json({ error: 'Error al crear la materia' });
    }
};

module.exports = { getMaterias, createMateria };