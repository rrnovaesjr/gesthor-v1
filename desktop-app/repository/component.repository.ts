import { MySQLRoleAuditedRepository } from "./mysql.repository";
import { _ComponentModel } from "../model/component/component.entity";
import { Connection, QueryError, OkPacket } from "mysql2";

/**
 * A component repository. Returns menu information for all interested users;
 * 
 * @author rodrigo-novaes
 */
class ComponentRepository extends MySQLRoleAuditedRepository<_ComponentModel, number> {

    /**
     * A constant static reference to the table's name.
     */
    public static readonly TABLE_NAME: string = `component`;

    /**
     * Creates a new instance of the component repository.
     */
    public constructor() {
        super(ComponentRepository.TABLE_NAME, {
            joinRoleColumnName: `role`,
            joinRoleTableName: `component_user_role`
        });
    }

    /**
     * Returns `true` wether `userRoles` is assigned to `route`.
     * 
     * @param connection A MySQL connection.
     * @param userRoles A set of user roles.
     * @param route An Angular route.
     * @param callback A query callback.
     */
    public hasRoles(
        connection: Connection,
        userRoles: string[],
        route: string,
        callback: (err: QueryError, result: OkPacket[]) => any): void 
    {
        let query = `select case when ${this.roleData.joinRoleTableName}.${this.roleData.joinRoleColumnName} 
            in (${connection.escape(userRoles)}) then true else false end as result from ${this.tableName} 
            inner join ${this.roleData.joinRoleTableName} on 
            ${this.roleData.joinRoleTableName}.component_id = ${this.tableName}.id 
            where ${this.tableName}.route = '${route}'`;
        connection.query(query, callback);

    }

}

export const componentRepository: ComponentRepository = new ComponentRepository();