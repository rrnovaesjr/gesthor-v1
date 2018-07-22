import { RestAPIBusiness } from './rest-api.business.interface';
import { environment } from '../../environments';
import { Request, Response } from 'express';
import { serverService } from '../server.service';
import { Observable } from 'rxjs';
const request = require("request");

/**
 * A user service handler for API requests.
 * 
 * @author rodrigo-novaes
 */
class UserBusiness implements RestAPIBusiness {

    /**
     * The reference to the API token.
     */
    private apiToken: { access_token: string, expires_in: number, token_type: string };

    /**
     * The reference to the user API for Token Management on Auth0.
     */
    private readonly userApi: string = `${environment.auth.apiUrl}/users`;

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
            request({
                method: 'POST',
                url: environment.auth.apiUrl,
                headers: { 'content-type': 'application/json' },
                body: environment.auth.optionsBody,
                json: true
            }, (err, response, body) => {
                if (err) {
                    throw err;
                }
                this.apiToken = body;
            });
        });
    }

    /**
     * Maps all users API GET requests.
     */
    public readonly get = [
        {
            url: '/api/users/:id',
            callback: (req: Request, res: Response) => {
                const userId: string = req.params.id;
                request({
                    method: 'GET',
                    url: `${this.userApi}/${userId}`,
                    headers: {
                        authorization: `Bearer ${this.apiToken.access_token}`
                    }
                }, (err, response, body) => {
                    if (err) {
                        throw err;
                    }
                    console.log(body);
                    res.send(body);
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
export const userBusiness: UserBusiness = new UserBusiness();