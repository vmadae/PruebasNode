const express = require('express');
const router = express.Router();
const contestController = require('../controllers/contestController');

// Definir la ruta para obtener un contest-type por ID
router.get('/contest-type/:id', contestController.getContestType);

module.exports = router;