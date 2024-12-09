const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
app.use(bodyParser.json());

const estudiantesRoutes = require('./routes/estudiantes');
const maestrosRoutes = require('./routes/maestros');
const materiasRoutes = require('./routes/materias');
const calificacionesRoutes = require('./routes/calificaciones');

// Usar rutas
app.use('/api/estudiantes', estudiantesRoutes);
app.use('/api/maestros', maestrosRoutes);
app.use('/api/materias', materiasRoutes);
app.use('/api/calificaciones', calificacionesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
