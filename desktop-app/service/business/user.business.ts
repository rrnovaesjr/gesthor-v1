import { RestAPIBusiness } from './abstract.business';
import { environment } from '../../environments';
import { Request, Response } from 'express';
import { serverService } from '../server.service';
import { timer } from 'rxjs';
import { GesthorLogger } from '../util/logger';
import { AbstractLoggerErrorHandlingBusiness } from './abstract.business';
import { User } from '../../model/user/user.model';
const request = require("request");

/**
 * A user service handler for API requests.
 * 
 * @author rodrigo-novaes
 */
class UserBusiness extends AbstractLoggerErrorHandlingBusiness implements RestAPIBusiness {

    /**
     * A private static and constant reference to a logger.
     */
    private static readonly LOGGER: GesthorLogger = new GesthorLogger(UserBusiness.name, 'user-business.log');

    /**
     * The reference to the API token.
     */
    private apiToken: { access_token: string, expires_in: number, token_type: string };

    /**
     * The reference to the user API for Token Management on Auth0.
     */
    private readonly userApi: string = `${environment.auth.optionsBody.audience}users`;

    /**
     * Initializes a new User Service.
     */
    public constructor() {
        super();
        this._requestManagementAPIToken();
    }

    /**
     * This function starts a new timer to get a new API
     * Management Token in a specific time period.
     * 
     * The initial delay and period is configured by the environment properties.
     */
    private _requestManagementAPIToken(): void {
        UserBusiness.LOGGER.info("[_requestManagementAPIToken()] Subscribing to event for requesting new API tokens.");
        timer(
            environment.auth.apiManagementTokenRequestConfig.initialDelay,
            environment.auth.apiManagementTokenRequestConfig.period
        ).subscribe((it: number) => {
            UserBusiness.LOGGER.info("[_requestManagementAPIToken()] Initializing %d Management API Token request.", it);
            request({
                method: 'POST',
                url: environment.auth.apiUrl,
                headers: { 'content-type': 'application/json' },
                body: environment.auth.optionsBody,
                json: true
            }, (err: Error, response: Response, body: any) => {
                if (err) {
                    UserBusiness.LOGGER.error("[_requestManagementAPIToken()] Could not get token. Error: %s. Message: %s.", );
                    throw err;
                }
                this.apiToken = body;
                UserBusiness.LOGGER.info("[_requestManagementAPIToken()] Token got successfully: %s.", JSON.stringify(this.apiToken));
            });
        });
        UserBusiness.LOGGER.info("[_requestManagementAPIToken()] Method scope finished.");
    }

    /**
     * Maps all users API GET requests.
     */
    public readonly get = [
        {
            url: '/api/users/:id',
            callback: (req: Request, res: Response) => {
                UserBusiness.LOGGER.info("[get:/api/users:id] Request to get user with id %s.", req.params.id);
                const userId: string = req.params.id;
                request({
                    method: 'GET',
                    url: `${this.userApi}/${userId}`,
                    headers: {
                        authorization: `${this.apiToken.token_type} ${this.apiToken.access_token}`
                    }
                }, (err: Error, response: Response, body: User) => {
                    if (err) {
                        UserBusiness.LOGGER.error("[get:/api/users:id] Could not get user. Error: %s. Message: %s.", err.name, err.message);
                        throw err;
                    }
                    res.send(body);
                    UserBusiness.LOGGER.info("[get:/api/users:id] User got successfully: %s.", JSON.stringify(body));
                });
            },
            jwtCheck: serverService.jwtCheck
        }
    ];

    /**
     * Returns the LOGGER instance of the User Business layer.
     */
    public getLoggers(): GesthorLogger | GesthorLogger[] {
        return UserBusiness.LOGGER;
    }


}

/**
 * A singleton object that implements all of client's services.
 * 
 * @author rodrigo-novaes
 */
export const userBusiness: UserBusiness = new UserBusiness();