const db = require("../config/db");

// Obtener todos los maestros
const getMaestros = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM maestros');
        res.status(200).json({
            success: true,
            data: rows,
        });
    } catch (err) {
        console.error('Error al obtener los maestros: ', err);
        res.status(500).json({ success: false, error: 'Error al obtener los maestros' });
    }
};

// Crear un maestro
const createMaestro = async (req, res) => {
    const { nombre, edad, telefono, correo } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO maestros (nombre, edad, telefono, correo, fecha_creacion) VALUES (?, ?, ?, ?, NOW())',
            [nombre, edad, telefono, correo]
        );
        res.status(201).json({ id: result.insertId, message: 'Maestro creado exitosamente' });
    } catch (err) {
        console.error('Error al crear el maestro: ', err);
        res.status(500).json({ error: 'Error al crear el maestro' });
    }
};

module.exports = { getMaestros, createMaestro };