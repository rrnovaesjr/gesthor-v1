import { AbstractLoggerErrorHandlingBusiness, RestAPIBusiness } from "./abstract.business";
import { GesthorLogger } from "../util/logger";
import { serverService } from "../server.service";
import { Response, Request } from "express";
import { transactionService } from "../transaction.service";
import { Connection, QueryError, OkPacket } from "mysql2";
import { componentRepository } from "../../repository/component.repository";
import { componentMapper } from "../mapper/component.mapper";

class ComponentBusiness extends AbstractLoggerErrorHandlingBusiness implements RestAPIBusiness {

    /**
     * A constant static reference to a logger object.
     */
    private static readonly LOGGER: GesthorLogger = new GesthorLogger(ComponentBusiness.name, 'component-business.log');

    public constructor() {
        super();
    }

    /**
     * Maps all POST requests to the components.
     */
    public post = [
        {
            url: '/api/components',
            jwtCheck: serverService.jwtCheck,
            callback: (req: Request, res: Response) => {
                ComponentBusiness.LOGGER.info("Request to get components for user roles %s.", JSON.stringify(req.body));
                transactionService.doInTransactionWithoutResult((connection: Connection) => {
                    const userRoles: string[] = req.body;
                    componentRepository.findAllByRoles(connection, userRoles, (err: QueryError, result: OkPacket[]) => {
                        ComponentBusiness.LOGGER.info("Components returned: %s.", JSON.stringify(componentMapper.manySQLToEntities(result)));
                    });
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