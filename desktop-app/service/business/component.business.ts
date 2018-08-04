import { AbstractLoggerErrorHandlingBusiness, RestAPIBusiness } from "./abstract.business";
import { GesthorLogger } from "../util/logger";
import { serverService } from "../server.service";
import { Response, Request } from "express";
import { transactionService } from "../transaction.service";
import { Connection, QueryError, OkPacket } from "mysql2";
import { componentRepository } from "../../repository/component.repository";
import { componentMapper } from "../mapper/component.mapper";
import { ComponentModel } from "../../model/component/component.model";
import { TreeNode } from "../../model/abstract/tree";
import { connect } from "http2";

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
                transactionService.doInTransactionWithoutResult((connection: Connection) => {
                    ComponentBusiness.LOGGER.info("Request to get components for user roles %s.", JSON.stringify(req.body));
                    const userRoles: string[] = req.body;
                    componentRepository.findAllByRoles(connection, userRoles, req.params, (err: QueryError, result: OkPacket[]) => {
                        let components: ComponentModel[] = [];
                        if(err) {
                            ComponentBusiness.LOGGER.error("Error detected: %s, %s", err.name, err.message);
                            throw err;
                        }
                        components = TreeNode.fromArray<number>(componentMapper.manySQLToEntities(result));
                        ComponentBusiness.LOGGER.info("Components returned: %s.", JSON.stringify(components));
                        res.send(components);
                    });
                }, (err?: Error) => this.handleError(err));
            }
        },
        {
            url: '/api/components/permission',
            jwtCheck: serverService.jwtCheck,
            callback: (req: Request, res: Response) => {
                transactionService.doInTransactionWithoutResult((connection: Connection) => {
                    ComponentBusiness.LOGGER.info("Request to check roles %s for url %s.", JSON.stringify(req.body.roles), JSON.stringify(req.body.route));
                    const userRoles: string[] = req.body.roles;
                    const url: string = req.body.route;
                    componentRepository.hasRoles(connection, userRoles, url, (err: QueryError, packet: OkPacket[]) => {
                        if(err) {
                            ComponentBusiness.LOGGER.error("Error detected: %s, %s", err.name, err.message);
                            throw err;
                        }
                        const result: boolean = packet && packet[0]['result'] ? packet[0]['result'] == 1 : false;
                        ComponentBusiness.LOGGER.info("Components returned: %s.", JSON.stringify(result));
                        res.send(result);
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

export const componentBusiness: ComponentBusiness = new ComponentBusiness();