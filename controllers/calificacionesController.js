const db = require("../config/db");

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

module.exports = { getCalificaciones };