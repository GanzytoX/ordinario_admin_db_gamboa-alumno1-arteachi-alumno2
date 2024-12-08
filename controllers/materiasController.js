const db = require("../config/db");

const getMaestros = async (req, res) => {
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

module.exports = { getMaestros };