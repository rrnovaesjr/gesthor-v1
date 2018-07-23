import { AbstractLoggerErrorHandlingBusiness, RestAPIBusiness } from "./abstract.business";
import { GesthorLogger } from "../util/logger";
import { serverService } from "../server.service";
import { Response, Request } from "express";
import { transactionService } from "../transaction.service";
import { Connection } from "mysql2";

class ComponentBusiness extends AbstractLoggerErrorHandlingBusiness implements RestAPIBusiness {

    /**
     * A constant static reference to a logger object.
     */
    private static readonly LOGGER: GesthorLogger = new GesthorLogger(ComponentBusiness.name, 'component-business.log');

    public constructor() {
        super();
    }

    /**
     * Maps all GET requests to the components.
     */
    public get = [
        {
            url: '/api/components',
            jwtCheck: serverService.jwtCheck,
            callback: (req: Request, res: Response) => {
                transactionService.doInTransactionWithoutResult((connection: Connection) => {
                    
                }, (err?: Error) => this.handleError(err));
            }
        }
    ];

    /**
     * Returns the LOGGER instance.
     * 
     */
    public getLoggers(): GesthorLogger {
        return ComponentBusiness.LOGGER;
    }

}