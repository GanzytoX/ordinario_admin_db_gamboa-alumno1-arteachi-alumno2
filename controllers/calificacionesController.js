const db = require("../config/db");

// Obtener todas las calificaciones
const getCalificaciones = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM calificaciones');
        res.status(200).json({
            success: true,
            data: rows,
        });
    } catch (err) {
        console.error('Error al obtener las calificaciones: ', err);
        res.status(500).json({ success: false, error: 'Error al obtener las calificaciones' });
    }
};

// Crear una calificacion
const createCalificacion = async (req, res) => {
    const { estudiante_id, maestro_id, materia_id } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO calificaciones (estudiante_id, maestro_id, materia_id, fecha_creacion) VALUES (?, ?, ?, NOW())',
            [estudiante_id, maestro_id, materia_id ]
        );
        res.status(201).json({ id: result.insertId, message: 'Calificación creada exitosamente' });
    } catch (err) {
        console.error('Error al crear la calificación: ', err);
        res.status(500).json({ error: 'Error al crear la calificación' });
    }
};

module.exports = { getCalificaciones, createCalificacion };