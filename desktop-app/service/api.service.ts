import { serverService } from './server.service';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Constants } from './util/constants';
import { environment } from '../environments';
import { Request, Response } from 'express';
import { AbstractLoggerErrorHandlerService } from './abstract.service';

import { clientBusiness } from './business/client.business';
import { userBusiness } from './business/user.business';
import { componentBusiness } from './business/component.business';

import { GesthorLogger } from './util/logger';
import { RestAPIBusiness } from './business/abstract.business';

/**
 * Class that encapsulates the fundamental functions from Gesthor's API into a singleton reference.
 * 
 * Any service/resource that imports this service can access the public functions the Gesthor's API exports.
 * 
 * @author rodrigo-novaes
 */
class ApiService extends AbstractLoggerErrorHandlerService {

    /**
     * A private static and constant reference to a logger object.
     */
    private static readonly LOGGER: GesthorLogger = new GesthorLogger(ApiService.name, 'api-service.log');

    /**
     * All implemented API interfaces.
     */
    private restAPI: RestAPIBusiness[] = [
        clientBusiness,
        userBusiness,
        componentBusiness
    ];

    /**
     * A private function that registers to the services and API methods for each entity.
     * 
     * @param port A port number.
     */
    private register(port: number): void {
        ApiService.LOGGER.info("[register()] Preparing to register REST endpoints to the port %d.", port);
        for(let api of this.restAPI) {
            if(api.post) {
                for(let post of api.post) {
                    ApiService.LOGGER.info("[register()] POST endpoint registered in the url %s.", post.url);
                    serverService.getExpressByPort(port).post(post.url, (req: Request, res: Response) => {
                        post.callback(req, res);
                    }, post.jwtCheck);
                }
            }
            if(api.put) {
                for(let put of api.put) {
                    ApiService.LOGGER.info("[register()] PUT endpoint registered in the url %s.", put.url);
                    serverService.getExpressByPort(port).put(put.url, (req: Request, res: Response) => {
                        put.callback(req, res);
                    }, put.jwtCheck);
                }
            }
            if(api.get) {
                for(let get of api.get) {
                    ApiService.LOGGER.info("[register()] GET endpoint registered in the url %s.", get.url);
                    serverService.getExpressByPort(port).get(get.url, (req: Request, res: Response) => {
                        get.callback(req, res);
                    }, get.jwtCheck);
                }
            }
            if(api.delete) {
                for(let del of api.delete) {
                    ApiService.LOGGER.info("[register()] DELETE endpoint registered in the url %s.", del.url);
                    serverService.getExpressByPort(port).delete(del.url, (req: Request, res: Response) => {
                        del.callback(req, res);
                    }, del.jwtCheck);
                }
            }
            if(api.patch) {
                for(let pat of api.patch) {
                    ApiService.LOGGER.info("[register()] PATCH endpoint registered in the url %s.", pat.url);
                    serverService.getExpressByPort(port).patch(pat.url, (req: Request, res: Response) => {
                        pat.callback(req, res);
                    }, pat.jwtCheck);
                }
            }
            if(api.trace) {
                for(let tra of api.trace) {
                    ApiService.LOGGER.info("[register()] TRACE endpoint registered in the url %s.", tra.url);
                    serverService.getExpressByPort(port).trace(tra.url, (req: Request, res: Response) => {
                        tra.callback(req, res);
                    }, tra.jwtCheck);
                }
            }
            if(api.connect) {
                for(let con of api.connect) {
                    ApiService.LOGGER.info("[register()] CONNECT endpoint registered in the url %s.", con.url);
                    serverService.getExpressByPort(port).connect(con.url, (req: Request, res: Response) => {
                        con.callback(req, res);
                    }, con.jwtCheck);
                }
            }
            if(api.options) {
                for(let opt of api.options) {
                    ApiService.LOGGER.info("[register()] OPTIONS endpoint registered in the url %s.", opt.url);
                    serverService.getExpressByPort(port).connect(opt.url, (req: Request, res: Response) => {
                        opt.callback(req, res);
                    }, opt.jwtCheck);
                }
            }
        }
        ApiService.LOGGER.info("[register()] API registering finished.");
    }

    /**
     * A global function that configures the API.
     */
    public config(port: number = Constants.DEFAULT_API_PORT): void {
        ApiService.LOGGER.info(`[config()] Starting API configuration in the port %d:
            1. Creating new express();
            2. Using bodyParser();
            3. Using cors();
            4. Using jwtCheck();
            5. Registering APIs;
            6. Starting listen.`, port);
        serverService.build(port);
        serverService.use(port, bodyParser.json(environment.serverConfig.json));
        serverService.use(port, bodyParser.urlencoded({ extended: true }));
        serverService.use(port, cors());
        serverService.use(port, serverService.jwtCheck);
        this.register(port);
        serverService.listen(port);
        ApiService.LOGGER.info("[config()] API configuration terminated.");
    }

    /**
     * Returns the LOGGER instance of the API Service.
     */
    public getLoggers(): GesthorLogger | GesthorLogger[] {
        return ApiService.LOGGER;
    }
    
}

/**
 * A singleton constant reference to the Gesthor's API service.
 * 
 * @author rodrigo-novaes
 */
export const apiService: ApiService = new ApiService();