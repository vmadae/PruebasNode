//Importar service
const contestService = require('../services/contestService');

//Controlador para manejar solicitud y respuesta
async function getContestType(request, response) {
    const {id} = request.params;
    console.log(id);
    
    try {
        const contestType = await contestService.getContestTypeById(id);
        response.json(contestType);
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
}

//Se permite exportar funciones, objetos, o valores de un módulo (archivo)
//Permite que diferentes archivos dentro del proyecto se comuniquen entre sí y compartan funcionalidad
//Beneficio: Código modular y reutilizable
module.exports = {
    getContestType
};