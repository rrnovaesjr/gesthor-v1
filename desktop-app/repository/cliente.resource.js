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
 * Cria um novo cliente para o usuário.
 */
apiCliente.post.push([
    '/cliente',
    function(req, res, next, mysqlConnection) {
        var insertingClienteRequest = mapperCliente.objectToSql(req.body);
        mysqlConnection.query('insert into `cliente` set ?', insertingClienteRequest, function(err, result){
            if(err) {
                return res.send(err);
            }
            else {
                console.log(result);
                return res.send(mapperCliente.sqlToObject(result));
            }
        });
    }
]);

/**
 * Obtém todos os clientes associados a um usuário.
 */
apiCliente.get.push([
    '/cliente/:usuarioId',
    function(req, res, next, mysqlConnection) {
        const size = req.query.size ? req.query.size : 10;
        const page = req.query.page ? req.query.page : 0;
        const sort = req.query.sort ? req.query.sort.split(',', 2) : 'id,ASC';
        let query = 'select * from `cliente`';
        query += ' where `usuario_id` = ' + req.params.usuarioId;
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
 * Obtém o cliente de um usuário a partir de seu identificador.
 */
apiCliente.get.push([
    '/cliente/:usuarioId/:id',
    function(req, res, next, mysqlConnection) {
        var queryRequest = {
            'usuario_id': req.params.usuarioId,
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
]);

/**
 * Atualiza o cliente de um usuário a partir de seu identificador.
 */
apiCliente.put.push([
    '/cliente',
    function(req, res, next, mysqlConnection) {
        var updatingClienteRequest = mapperCliente.objectToSql(req.body);
        mysqlConnection.query('update `cliente` set ?', updatingClienteRequest, function(err, result){
            if(err) {
                return res.send(err);
            }
            else {
                console.log(result);
                return res.send(mapperCliente.sqlToObject(result));
            }
        });
    }
])

/**
 * Deleta o cliente de um usuário a partir de seu identificador.
 */
apiCliente.delete.push([
    '/cliente',
    function(req, res, next, mysqlConnection) {
        var deletingClienteRequestId = req.body;
        mysqlConnection.query('delete cliente where id = ?', deletingClienteRequestId, function(err, result) {
            if(err) {
                return res.send(err);
            }
            else {
                return res.send({});
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