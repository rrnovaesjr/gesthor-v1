import * as express from 'express';
import { Server } from 'http';
import * as jwt from 'express-jwt';
import { environment } from '../environments';
import * as jwks from 'jwks-rsa';
import { GesthorLogger } from './util/logger';
import { AbstractLoggerErrorHandlerService } from './abstract.service';

/**
 * This class encapsulates the fundamental functions from Express' API into a singleton reference.
 * 
 * @author rodrigo-novaes
 */
class ServerService extends AbstractLoggerErrorHandlerService {

    /**
     * A constant static reference to a logger object.
     */
    private static readonly LOGGER: GesthorLogger = new GesthorLogger(ServerService.name, 'server-service.log');

    /**
     * Creates a request handler for secure connections.
     */
    public readonly jwtCheck: jwt.RequestHandler = jwt({
        secret: jwks.expressJwtSecret(environment.auth.secret),
        audience: environment.auth.audience,
        issuer: environment.auth.issuer,
        algorithms: environment.auth.algorithms
    });

    /**
     * Global reference to the application's servers.
     */
    public readonly serverApplication: Map<number, express.Express> = new Map();

    /**
     * Creates a new express service in the given port.
     * 
     * @param port A port number.
     */
    public build(port: number): express.Express {
        ServerService.LOGGER.info("[build()] Setting new server on port %d.", port);
        this.serverApplication.set(port, express());
        ServerService.LOGGER.info("[build()] Server started successfully.");
        return this.serverApplication.get(port);
    }

    /**
     * Receives a handler or an array of handlers to be used as callbacks for application's servers.
     * 
     * The correspondant server is identified by the port its listening.
     * 
     * @param port A port number.
     * @param handler Defines a request handler to be used on callbacks.
     */
    public use(port: number, handler: express.RequestHandler | express.RequestHandler[]): express.Express {
        ServerService.LOGGER.info("[use()] Attempt to use new express handler on port %d.", port);
        if(!this.serverApplication.get(port)) {
            ServerService.LOGGER.warn("[use()] Alert! No server has been started on port %d. What are you trying to do?", port);
            return null;
        }
        ServerService.LOGGER.info("[use()] Handler is now being used by the server in port %d.", port);
        return this.serverApplication.get(port).use(handler);
    }

    /**
     * Sets a server application to listen on a specific port. Returns `null` if the server doesn't 
     * exist.
     * 
     * @param port A port number.
     * @param hostname A string to the hostname.
     * @param callback A function to be executed as callback.
     */
    public listen(port: number, hostname?: string, callback?: Function): Server {
        ServerService.LOGGER.info("[listen()] Attempt to use new express handler on address %s:%d. Note that null:number means localhost.", hostname, port);
        if(!this.serverApplication.get(port)) {
            ServerService.LOGGER.warn("[listen()] Alert! No server has been started on port %d. What are you trying to do?", port);
            return null;
        }
        ServerService.LOGGER.info("[listen()] New server created on address %s:%d.", hostname, port);
        return this.serverApplication.get(port).listen(port, hostname, callback);
    }

    /**
     * Returns an express object from a given port number. Returns the `express` object.
     * 
     * @param port A port number.
     */
    public getExpressByPort(port: number): express.Express {
        ServerService.LOGGER.info("[getExpressByPort()] Returning express() on port %d.", port);
        return this.serverApplication.get(port);
    }

    /**
     * Returns the LOGGER instance of the Server Service.
     */
    public getLoggers(): GesthorLogger | GesthorLogger[] {
        return ServerService.LOGGER;
    }

}

/**
 * A constant singleton reference to the Servers Service.
 * 
 * @author rodrigo-novaes
 */
export const serverService = new ServerService();