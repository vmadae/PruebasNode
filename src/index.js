//Importar Express framework web que facilita la creación de aplicaciones web y APIs
const express = require('express');

//Crear instancia de Express
const app = express();
const contestRoutes = require('./routes/contestRoutes')

//Usar las rutas definidas  en el archivo contestRoutes
app.use('/api', contestRoutes);

//Definir puerto
const PORT= 3000;
app.listen(PORT, () => {
    console.log(`Servidor en puerto http://localhost:${PORT}`)
});