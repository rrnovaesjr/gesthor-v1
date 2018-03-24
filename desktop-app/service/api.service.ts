import { ServerService as serverService, ServerService } from './server.service';
import * as mysql from 'mysql2';
import * as jwt from 'express-jwt';
import * as jwks from 'jwks-rsa';
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as serveStatic from 'serve-static';
import * as cors from 'cors';
import { Constants } from './util/constants';
import { environment } from '../environments';
import { RestAPIService } from './rest-service.interface';
import { Request, Response } from 'express';

import { clienteService } from './cliente.service';

/**
 * This namespace encapsulates the fundamental functions from Gesthor's API into a singleton reference.
 * 
 * Any service/resource that imports this service can access the public functions the Gesthor's API exports.
 * 
 * @author rodrigo-novaes
 */
export namespace ApiService {

    /**
     * All implemented API interfaces.
     */
    const restAPI: RestAPIService[] = [
        clienteService
    ]

    /**
     * Creates a request handler for secure connections.
     */
    var jwtCheck: jwt.RequestHandler = jwt({
        secret: jwks.expressJwtSecret(environment.auth.secret),
        audience: environment.auth.audience,
        issuer: environment.auth.issuer,
        algorithms: environment.auth.algorithms
    });

    /**
     * A global reference to a `mysql.Connection` object.
     */
    export var connection: mysql.Connection;

    /**
     * A private function that registers to the services and API methods for each entity.
     * 
     * @param port A port number.
     */
    function register(port: number): void {
        for(let api of restAPI) {
            if(api.post) {
                for(let post of api.post) {
                    ServerService.getExpressByPort(port).post(post.url, (req: Request, res: Response) => {
                        post.callback(req, res);
                    });
                }
            }
            if(api.put) {
                for(let put of api.put) {
                    ServerService.getExpressByPort(port).put(put.url, (req: Request, res: Response) => {
                        put.callback(req, res);
                    });
                }
            }
            if(api.get) {
                for(let get of api.get) {
                    ServerService.getExpressByPort(port).get(get.url, (req: Request, res: Response) => {
                        get.callback(req, res);
                    });
                }
            }
            if(api.delete) {
                for(let del of api.delete) {
                    ServerService.getExpressByPort(port).delete(del.url, (req: Request, res: Response) => {
                        del.callback(req, res);
                    });
                }
            }
        }
    }

    /**
     * A global function that configures the API.
     */
    export function config(port: number = Constants.DEFAULT_API_PORT): void {
        connection = mysql.createConnection(environment.databaseConfig);
        serverService.build(port);
        serverService.use(port, bodyParser.json(environment.serverConfig.json));
        serverService.use(port, bodyParser.urlencoded(environment.serverConfig.urlencoded));
        //serverService.use(port, express.static(environment.serverConfig.static));
        //serverService.use(port, serveStatic());
        serverService.use(port, cors());
        //serverService.use(port, jwtCheck);
        register(port);
        serverService.listen(port);
    }
    
}