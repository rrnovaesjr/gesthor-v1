var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql2');
var app = express();

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
    app.post('/cliente', function(req, res, next) {
        var cope = req.body;
        console.log('request received:', req.body);
        var query = connection.execute('insert into cope set ?', cope, function(err, result) {
            if(err) {
                console.error(err);
                return res.send(err);
            } 
            else {
                return res.send('Ok');
            }
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
     * banco de dados. Se nenhum for fornecido, então o padrão é `api.mode`.
     */
    config: function(mode = null) {
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
        register(connection);
        app.listen(8080);
    }
}

module.exports = {
    api
}