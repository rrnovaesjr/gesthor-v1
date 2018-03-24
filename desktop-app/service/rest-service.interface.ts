import { Request, Response } from 'express';

/**
 * A default interface for a REST API service.
 * 
 * @author rodrigo-novaes
 */
export interface RestAPIService {

    /**
     * A set of pairs (`url`, `callback`) that maps a HTTP POST request urls to a specific URL.
     */
    post?: Function[];

    /**
     * A set of pairs (`url`, `callback`) that maps a HTTP PUT request urls to a specific URL.
     */
    put?: Function[];
    
    /**
     * A set of pairs (`url`, `callback`) that maps a HTTP GET request urls to a specific URL.
     */
    get?: { url: string, callback: (req: Request, res: Response) => void}[];

    /**
     * A set of pairs (`url`, `callback`) that maps a HTTP DELETE request urls to a specific URL.
     */
    delete?: Function[];

}