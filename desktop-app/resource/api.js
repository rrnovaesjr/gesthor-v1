var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql2');
var cors = require('cors');
var serveStatic = require('serve-static');
var app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const path = require('path');

var resourceCliente = require('./cliente.resource');

/**
 * JWT middleware for token validation.
 */
var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://rrnovaesjr.auth0.com/.well-known/jwks.json"
    }),
    audience: 'http://localhost:8080',
    issuer: "https://rrnovaesjr.auth0.com/",
    algorithms: ['RS256']
}).unless({
    path: [
        '/callback'
    ]
});
  

/**
 * Registra todas as chamadas para a API da aplicação.
 * 
 * *Requisições POST*: criação de novas entidades;
 * 
 * *Requisição PUT*: atualização de entidades;
 * 
 * *Requisição GET*: leitura de entidades;
 * 
 * *Requisição DELETE*: deleção de entidades.
 */
function register(connection) {
    var restAPI = [
        resourceCliente.apiCliente
    ];
    restAPI.forEach(function(funcMap) {
        funcMap.post.forEach(function([uri, callback]) {
            app.post('/api' + uri, function(req, res, next) {
                callback(req, res, next, connection);
            });
        });
        funcMap.get.forEach(function([uri, callback]) {
            app.get('/api' + uri, function(req, res, next) {
                callback(req, res, next, connection);
            });
        });
        funcMap.put.forEach(function([uri, callback]) {
            app.put('/api' + uri, function(req, res, next) {
                callback(req, res, next, connection);
            });
        });
        funcMap.delete.forEach(function([uri, callback]) {
            app.delete('/api' + uri, function(req, res, next) {
                callback(req, res, next, connection);
            });
        });
    });
}

 /** 
 * Definições da API para a aplicação *Gesthor*.
 * 
*/
let api = {
    /**
     * Modo de execução da API. Pode ser:
     * 
     * - `'dev'`: para desenvolvimento;
     * 
     * - `'hom'`: para homologação;
     * 
     * - `'prod'`: para produção.
     */
    mode: 'dev',

    /**
     * Configura a API para a aplicação *Gesthor*. Recebe, como parâmero, o modo de conexão ao
     * banco de dados. Se nenhum for fornecido, então o padrão é `api.mode = 'dev'`.
     */
    config: function(dirname, mode = null, port = 8080) {
        let connection;
        if(!mode) {
            mode = api.mode;
        }
        if(mode === 'dev') {
            connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '123456',
                database: 'gesthor_dev'
            });
        }
        else if(mode === 'hom') {
            connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '123456',
                database: 'gesthor_hom'
            });
        }
        else {
            connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '123456',
                database: 'gesthor'
            });
        }
        app.use(bodyParser.json({limit: '50mb'}));
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(express.static('public'));
        app.use(serveStatic(dirname));
        app.use(cors());
        app.use(jwtCheck)
        register(connection);
        app.listen(port);
        return app;
    }
}

/** 
 * Exporta a API para módulos interessados.
*/
module.exports = {
    api
}