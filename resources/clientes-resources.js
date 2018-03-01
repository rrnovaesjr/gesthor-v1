const mysql = require('mysql2');

/** 
 * Mapa que relaciona a URI para requisição da API de clientes com sua respectiva *callback*.
 * 
 * Este mapa será iterado pelo módulo da API com a finalidade de registrar as URIs em escuta.
*/
let clientesAPI = {post: [], get: [], put: [], delete: []};

/**
 * Cria um novo cliente.
 */
clientesAPI.post.push([
    '/cliente',
    function(req, res, next, mysqlConnection) {
        console.log(req);
        var insertClientRequest = {
            'nome_razaosocial': req.body.nomeRazaoSocial
        }
        mysqlConnection.query('insert into cliente set ?', insertClientRequest, function(err, result){
            if(err) {
                return res.send(err);
            }
            else {
                return res.send(result);
            }
        });
    }
]);

/**
 * Obtém todos os clientes.
 */
clientesAPI.get.push([
    '/cliente',
    function(req, res, next, mysqlConnection) {
        let query = 'select * from cliente';
        mysqlConnection.execute(query, function(err, result) {
            if(err) {
                return res.send(err);
            }
            else {
                return res.send(result);
            }
        });
    }
]);

/**
 * Obtém um cliente a partir de um identificador.
 */
clientesAPI.get.push([
    '/cliente/:id',
    function(req, res, next, mysqlConnection) {
        console.log(req);
        var queryRequest = {
            'id': req.params.id
        }
        mysqlConnection.query('select * from cliente where ?', queryRequest, function(err, result) {
            if(err) {
                return res.send(err);
            }
            else {
                return res.send(result[0]);
            }
        });
    }
])

/** 
 * Exporta os métodos para assinatura da API.
*/
module.exports = {
    clientesAPI
}