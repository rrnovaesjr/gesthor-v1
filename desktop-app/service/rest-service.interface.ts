import { Request, Response } from 'express';
import * as jwt from 'express-jwt';

/**
 * A default interface for a REST API service.
 * 
 * @author rodrigo-novaes
 */
export interface RestAPIService {

    /**
     * A set of tuples (`url`, `security`, `callback`) that maps a HTTP POST request urls to a specific URL.
     */
    post?: { url: string, jwtCheck?: jwt.RequestHandler, callback?: (req: Request, res: Response) => void }[];

    /**
     * A set of tuples (`url`, `security`, `callback`) that maps a HTTP PUT request urls to a specific URL.
     */
    put?: { url: string, jwtCheck?: jwt.RequestHandler, callback?: (req: Request, res: Response) => void }[];

    /**
     * A of tuples (`url`, `security`, `callback`) that maps a HTTP GET request urls to a specific URL.
     */
    get?: { url: string, jwtCheck?: jwt.RequestHandler, callback?: (req: Request, res: Response) => void  }[];

    /**
     * A set of tuples (`url`, `security`, `callback`) that maps a HTTP DELETE request urls to a specific URL.
     */
    delete?: { url: string, jwtCheck?: jwt.RequestHandler, callback?: (req: Request, res: Response) => void }[];

    /**
     * A set of tuples (`url`, `security`, `callback`) that maps a HTTP PATCH request urls to a specific URL.
     */
    patch?: { url: string, jwtCheck?: jwt.RequestHandler, callback?: (req: Request, res: Response) => void }[];

}