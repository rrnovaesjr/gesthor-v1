import { ServerService } from './server.service';
import * as mysql from 'mysql2';
import * as jwt from 'express-jwt';
import * as jwks from 'jwks-rsa';
import * as path from 'path';

/**
 * This namespace encapsulates the fundamental functions from Gesthor's API into a singleton reference.
 * 
 * Any service/resource that imports this service can access the public functions the Gesthor's API exports.
 * 
 * @author rodrigo-novaes
 */
export namespace ApiService {

    /**
     * Creates a request handler for secure connections.
     */
    var jwtCheck: jwt.RequestHandler = jwt({
        secret: jwks.expressJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
            jwksUri: "https://rrnovaesjr.auth0.com/.well-known/jwks.json"
        }),
        audience: 'http://localhost:8080',
        issuer: "https://rrnovaesjr.auth0.com/",
        algorithms: ['RS256']
    });

    /**
     * A global reference to a `mysql.Connection` object.
     */
    export var connection: mysql.Connection;

    /**
     * A private function that registers to the services and API methods for each entity.
     */
    function register(): void {
        
    }

    /**
     * A global function that configures the API.
     */
    export function config(): void {

    }
    
}