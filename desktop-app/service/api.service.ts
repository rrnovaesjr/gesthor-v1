import { serverService } from './server.service';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { Constants } from './util/constants';
import { environment } from '../environments';
import { RestAPIService } from './rest-service.interface';
import { Request, Response } from 'express';
import { clientService } from './client.service';
import { userService } from './user.service';
import { AbstractService } from './abstract.service';

/**
 * Class that encapsulates the fundamental functions from Gesthor's API into a singleton reference.
 * 
 * Any service/resource that imports this service can access the public functions the Gesthor's API exports.
 * 
 * @author rodrigo-novaes
 */
class ApiService extends AbstractService {

    /**
     * All implemented API interfaces.
     */
    private restAPI: RestAPIService[] = [
        clientService,
        userService
    ];

    /**
     * A private function that registers to the services and API methods for each entity.
     * 
     * @param port A port number.
     */
    private register(port: number): void {
        for(let api of this.restAPI) {
            if(api.post) {
                for(let post of api.post) {
                    serverService.getExpressByPort(port).post(post.url, (req: Request, res: Response) => {
                        post.callback(req, res);
                    }, post.jwtCheck);
                }
            }
            if(api.put) {
                for(let put of api.put) {
                    serverService.getExpressByPort(port).put(put.url, (req: Request, res: Response) => {
                        put.callback(req, res);
                    }, put.jwtCheck);
                }
            }
            if(api.get) {
                for(let get of api.get) {
                    serverService.getExpressByPort(port).get(get.url, (req: Request, res: Response) => {
                        get.callback(req, res);
                    }, get.jwtCheck);
                }
            }
            if(api.delete) {
                for(let del of api.delete) {
                    serverService.getExpressByPort(port).delete(del.url, (req: Request, res: Response) => {
                        del.callback(req, res);
                    }, del.jwtCheck);
                }
            }
            if(api.patch) {
                for(let pat of api.patch) {
                    serverService.getExpressByPort(port).patch(pat.url, (req: Request, res: Response) => {
                        pat.callback(req, res);
                    }, pat.jwtCheck);
                }
            }
        }
    }

    /**
     * A global function that configures the API.
     */
    public config(port: number = Constants.DEFAULT_API_PORT): void {
        serverService.build(port);
        serverService.use(port, bodyParser.json(environment.serverConfig.json));
        serverService.use(port, bodyParser.urlencoded({ extended: true }));
        serverService.use(port, cors());
        serverService.use(port, serverService.jwtCheck);
        this.register(port);
        serverService.listen(port);
    }
    
}

/**
 * A singleton constant reference to the Gesthor's API service.
 * 
 * @author rodrigo-novaes
 */
export const apiService: ApiService = new ApiService();