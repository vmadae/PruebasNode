//Importar Axios (Permite hacer llamadas HTTP)
const axios = require('axios');

//Función para obtener datos desde AI de Pokemon
async function getContestTypeById(id) {
    const url = `https://pokeapi.co/api/v2/contest-type/${id}`;
    try {
        const response = await axios.get(url);

        //devolver los datos de API
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener datos de la API de Pokemon');
    }
}

//Se permite exportar funciones, objetos, o valores de un módulo (archivo)
//Permite que diferentes archivos dentro del proyecto se comuniquen entre sí y compartan funcionalidad
//Beneficio: Código modular y reutilizable
module.exports = {
    getContestTypeById
};