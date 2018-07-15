import { RestAPIService } from './rest-service.interface';
import { environment } from '../environments';
import { Request, Response } from 'express';
import { serverService } from './server.service';
const request = require("request");

/**
 * A user service handler for API requests.
 * 
 * @author rodrigo-novaes
 */
class UserService implements RestAPIService {

    /**
     * The reference to the API token.
     */
    private apiToken: string = '';

    /**
     * Request to the API management.
     */
    private readonly options = {
        method: 'POST',
        url: environment.auth.apiUrl,
        headers: { 'content-type': 'application/json' },
        body: environment.auth.optionsBody,
        json: true
    };

    /**
     * Maps all GET functions for users.
     */
    public readonly post = [
        {
            url: '/api/token',
            callback: (req: Request, res: Response) => {
                request(this.options, (error, response, body) => {
                    if(error) {
                        console.log(error);
                    }
                    console.log(response);
                    this.apiToken = body;
                    res.send(this.apiToken);
                });
            },
            jwtCheck: serverService.jwtCheck
        }
    ];


}

/**
 * A singleton object that implements all of client's services.
 * 
 * @author rodrigo-novaes
 */
export const userService: UserService = new UserService();