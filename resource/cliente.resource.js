const {
    mapperCliente
} = require('../service/cliente.service');

/** 
 * Mapa que relaciona a URI para requisição da API de clientes com sua respectiva *callback*.
 * 
 * Este mapa será iterado pelo módulo da API com a finalidade de registrar as URIs para escuta.
*/
let apiCliente = {post: [], get: [], put: [], delete: []};

/**
 * Cria um novo cliente.
 */
apiCliente.post.push([
    '/cliente',
    function(req, res, next, mysqlConnection) {
        var insertClientRequest = mapperCliente.objectToSql(req.body);
        mysqlConnection.query('insert into cliente set ?', insertClientRequest, function(err, result){
            if(err) {
                return res.send(err);
            }
            else {
                return res.send(mapperCliente.sqlToObject(result));
            }
        });
    }
]);

/**
 * Obtém todos os clientes.
 */
apiCliente.get.push([
    '/cliente',
    function(req, res, next, mysqlConnection) {
        const size = req.query.size ? req.query.size : 10;
        const page = req.query.page ? req.query.page : 0;
        const sort = req.query.sort ? req.query.sort.split(',', 2) : 'id,ASC';
        let query = 'select * from `cliente`';
        query += ' order by ' + mysqlConnection.escapeId(sort[0]);
        query += ' ' + sort[1].toUpperCase(); 
        query += ' limit ' + (page * size);
        query += ', ' + size;
        mysqlConnection.execute(query, function(err, result) {
            if(err) {
                return res.send(err);
            }
            else {
                return res.send(mapperCliente.manySqlToObjects(result));
            }
        });
    }
]);

/**
 * Obtém um cliente a partir de um identificador.
 */
apiCliente.get.push([
    '/cliente/:id',
    function(req, res, next, mysqlConnection) {
        var queryRequest = {
            'id': req.params.id
        }
        mysqlConnection.query('select * from `cliente` where ?', queryRequest, function(err, result) {
            if(err) {
                return res.send(err);
            }
            else {
                return res.send(mapperCliente.sqlToObject(result[0]));
            }
        });
    }
])

/** 
 * Exporta os métodos para assinatura da API.
*/
module.exports = {
    apiCliente
}