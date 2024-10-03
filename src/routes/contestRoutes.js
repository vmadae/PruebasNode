//Importar Express framework web que facilita la creación de aplicaciones web y APIs
const express = require('express');
const router = express.Router();
const contestController = require('../controllers/contestController');

// Definir la ruta para obtener un contest-type por ID
router.get('/combined-info/:contestId/:berryId', contestController.getCombinedInfo);

module.exports = router;