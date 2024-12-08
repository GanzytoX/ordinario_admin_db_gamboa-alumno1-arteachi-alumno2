const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
app.use(bodyParser.json());

// Importar rutas
const estudiantesRoutes = require('./routes/estudiantes')

// Rutas
app.use('/api/estudiantes', estudiantesRoutes)

// Puerto e inicializacion del servidor
const PORT = 3011;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
