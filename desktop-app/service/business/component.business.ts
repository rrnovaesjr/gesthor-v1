import { AbstractLoggerErrorHandlingBusiness, RestAPIBusiness } from "./abstract.business";
import { GesthorLogger } from "../util/logger";
import { serverService } from "../server.service";
import { Response, Request } from "express";
import { transactionService } from "../transaction.service";
import { Connection, QueryError, OkPacket } from "mysql2";
import { componentRepository } from "../../repository/component.repository";
import { componentMapper } from "../mapper/component.mapper";
import { ComponentModel } from "../../model/component/component.model";

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
                        components = this._buildComponentTreeFromComponentList(componentMapper.manySQLToEntities(result));
                        ComponentBusiness.LOGGER.info("Components returned: %s.", JSON.stringify(components));
                        res.send(components);
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

    private _buildComponentTreeFromComponentList(components: ComponentModel[]): ComponentModel[] {
        const componentGraph: Map<number, ComponentModel[]> = new Map();
        let result: ComponentModel[] = [];
        for(let component of components) {
            if(!component.parentId) {
                result.push(component);
            } else {
                if(!componentGraph.has(component.parentId)) {
                    componentGraph.set(component.parentId, []);
                }
                componentGraph.get(component.parentId).push(component);
            }
        }
        for(let preReslt of result) {
            preReslt = ComponentBusiness._explore(preReslt, componentGraph);
        }
        return result;
    }

    private static _explore(root: ComponentModel, componentGraph: Map<number, ComponentModel[]>): ComponentModel {
        root.children = [];
        if(componentGraph.has(root.id)) {
            for(let adj of componentGraph.get(root.id)) {
                adj = this._explore(adj, componentGraph);
                root.children.push(adj);
            }    
        }
        return root;
    }

}

export const componentBusiness: ComponentBusiness = new ComponentBusiness();