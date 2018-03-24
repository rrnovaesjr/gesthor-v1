import * as express from 'express';
import { Server } from 'http';

/**
 * This namespace encapsulates the fundamental functions from Express' API into a singleton reference.
 * 
 * @author rodrigo-novaes
 */
export namespace ServerService {

    /**
     * Global reference to the application's servers.
     */
    var serverApplication: Map<number, express.Express> = new Map();

    /**
     * Creates a new express service in the given port.
     * 
     * @param port A port number.
     */
    export function build(port: number): express.Express {
        serverApplication.set(port, express())
        return serverApplication.get(port);
    }

    /**
     * Receives a handler or an array of handlers to be used as callbacks for application's servers.
     * 
     * The correspondant server is identified by the port its listening.
     * 
     * @param port A port number.
     * @param handler Defines a request handler to be used on callbacks.
     */
    export function use(port: number, handler: express.RequestHandler | express.RequestHandler[]): express.Express {
        if(!serverApplication.get(port)) {
            return null;
        }
        return serverApplication.get(port).use(handler);
    }

    /**
     * Sets a server application to listen on a specific port. Returns `null` if the server doesn't 
     * exist.
     * 
     * @param port A port number.
     * @param hostname A string to the hostname.
     * @param callback A function to be executed as callback.
     */
    export function listen(port: number, hostname?: string, callback?: Function): Server {
        if(!serverApplication.get(port)) {
            return null;
        }
        return serverApplication.get(port).listen(port, hostname, callback);
    }

    /**
     * Returns an express object from a given port number. Returns the `express` object.
     * 
     * @param port A port number.
     */
    export function getExpressByPort(port: number): express.Express {
        return serverApplication.get(port);
    }

}