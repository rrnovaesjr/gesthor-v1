import { AbstractLoggerErrorHandlerService } from "../abstract.service";
import { Request, Response } from 'express';
import { RequestHandler } from "express-jwt";

/**
 * A default interface for a REST API service.
 * 
 * @author rodrigo-novaes
 */
export interface RestAPIBusiness {

    /**
     * A set of tuples (`url`, `security`, `callback`) that maps a HTTP POST request urls to a specific URL.
     */
    post?: { url: string, jwtCheck?: RequestHandler, callback?: (req: Request, res: Response) => void }[];

    /**
     * A set of tuples (`url`, `security`, `callback`) that maps a HTTP PUT request urls to a specific URL.
     */
    put?: { url: string, jwtCheck?: RequestHandler, callback?: (req: Request, res: Response) => void }[];

    /**
     * A of tuples (`url`, `security`, `callback`) that maps a HTTP GET request urls to a specific URL.
     */
    get?: { url: string, jwtCheck?: RequestHandler, callback?: (req: Request, res: Response) => void }[];

    /**
     * A set of tuples (`url`, `security`, `callback`) that maps a HTTP DELETE request urls to a specific URL.
     */
    delete?: { url: string, jwtCheck?: RequestHandler, callback?: (req: Request, res: Response) => void }[];

    /**
     * A set of tuples (`url`, `security`, `callback`) that maps a HTTP PATCH request urls to a specific URL.
     */
    patch?: { url: string, jwtCheck?: RequestHandler, callback?: (req: Request, res: Response) => void }[];

    /**
     * A set of tuples (`url`, `security`, `callback`) that maps a HTTP HEAD request urls to a specific URL.
     */
    head?: { url: string, jwtCheck?: RequestHandler, callback?: (req: Request, res: Response) => void }[];

    /**
     * A set of tuples (`url`, `security`, `callback`) that maps a HTTP CONNECT request urls to a specific URL.
     */
    connect?: { url: string, jwtCheck?: RequestHandler, callback?: (req: Request, res: Response) => void }[];

    /**
     * A set of tuples (`url`, `security`, `callback`) that maps a HTTP OPTIONS request urls to a specific URL.
     */
    options?: { url: string, jwtCheck?: RequestHandler, callback?: (req: Request, res: Response) => void }[];

    /**
     * A set of tuples (`url`, `security`, `callback`) that maps a HTTP TRACE request urls to a specific URL.
     */
    trace?: { url: string, jwtCheck?: RequestHandler, callback?: (req: Request, res: Response) => void }[];

}

/**
 * An abstract business instance. Inherits all functions from the abstract service type, also with
 * the properties the business layer must implement, such as the REST API interface.
 * 
 * @author rodrigo-novaes
 */
export abstract class AbstractLoggerErrorHandlingBusiness extends AbstractLoggerErrorHandlerService {

    /**
     * A default public constructor.
     */
    public constructor() {
        super();
    }

}