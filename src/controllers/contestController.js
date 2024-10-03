//Importar service
const contestService = require('../services/contestService');

//Controlador para manejar solicitud y respuesta
async function getCombinedInfo(request, response) {
    const {contestId, berryId} = request.params; //Obtener IDs de la URL

    try {
        //Hacer solicitudes en paralelo
        const [contestType , berryFlavor] = await Promise.all([
            contestService.getContestTypeById(contestId),
            contestService.getBerryFlavorById(berryId)
        ]);

        const combinedData = {
            contestType: contestType.name,
            berryFlavor: berryFlavor.name,
            description: `El concurso tipo "${contestType.name}" está asociado al sabor de baya "${berryFlavor.name}".`
        };

        response.json(combinedData);
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
}

//Se permite exportar funciones, objetos, o valores de un módulo (archivo)
//Permite que diferentes archivos dentro del proyecto se comuniquen entre sí y compartan funcionalidad
//Beneficio: Código modular y reutilizable
module.exports = {
    getCombinedInfo
};