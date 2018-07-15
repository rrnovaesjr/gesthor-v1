import { RestAPIService } from './rest-service.interface';
import { environment } from '../environments';
import { Request, Response } from 'express';
import { serverService } from './server.service';
import { Observable } from 'rxjs';
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
    private apiToken: { access_token: string, expires_in: number, token_type: string };

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
     * Initializes a new User Service. This function starts a new timer to get a new API
     * Management Token in a specific time period.
     * 
     * The initial delay and period is configured by the environment properties.
     */
    public constructor() {
        Observable.timer(
            environment.auth.apiManagementTokenRequestConfig.initialDelay,
            environment.auth.apiManagementTokenRequestConfig.period
        ).subscribe((it: number) => {
            request(this.options, (err, response, body) => {
                if (err) {
                    throw err;
                }
                this.apiToken = body;
                console.log(this.apiToken);
            });
        });
    }

    /**
     * Maps all GET functions for users.
     */
    public readonly post = [
        {
            url: '/api/token',
            callback: (req: Request, res: Response) => {
                request(this.options, (error, response, body) => {
                    if (error) {
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