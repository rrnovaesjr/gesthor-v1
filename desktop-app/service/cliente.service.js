
/**
 * Conjunto de módulos que compõem o serviço relacionados a clientes.
 */
const {
    mapperCliente
} = require('./mapper/cliente.mapper');

/** 
 * Exporta os serviços associados a clientes para os módulos interessados.
*/
module.exports = {
    mapperCliente
}