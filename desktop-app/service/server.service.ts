import * as express from 'express';
import { Server } from 'http';

/**
 * This namespace encapsulates the fundamental functions from Express' API into a singleton reference.
 */
export namespace ServerService {

    /**
     * Global reference to the server application.
     */
    export var serverApplication: express.Express = express();

    /**
     * Receives a handler or an array of handlers to be used as callbacks for application's servers.
     * 
     * @param handler Defines a request handler to be used on callbacks.
     */
    export function use(handler: express.RequestHandler | express.RequestHandler[]): express.Express {
        return serverApplication.use(handler);
    }

    /**
     * Sets the server application to listen on a specific port.
     * 
     * @param port A port number.
     */
    export function listen(port: number, hostname?: string, callback?: Function): Server {
        return serverApplication.listen(port, hostname, callback);
    }

}