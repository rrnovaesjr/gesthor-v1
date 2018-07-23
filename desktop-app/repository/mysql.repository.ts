import { QueryError, OkPacket, Connection } from 'mysql2';
import { Entity, UserAuditedEntity } from '../model/abstract/entity';
import { Constants } from '../service/util/constants';
import { transactionService } from '../service/transaction.service';
import { Auth0UserProfile } from 'auth0-js';

/**
 * A common abstract definition to MySQL repositories. This class contains the default methods
 * for CRUDs.
 * 
 * @param _E an Entity with primary key PK.
 * @param PK A Serializable primary key's type.
 * @author rodrigo-novaes
 */
abstract class CommonMySQLRepository<_E extends Entity<PK>, PK> {

    /**
     * Receives the table's name as a parameter.
     * 
     * @param tableName The entity's table name.
     */
    public constructor(protected tableName: string) {

    }

    /**
     * Creates an entity.
     * 
     * Can throw exceptions based on multiple identifiers definitions.
     * 
     * @param connection An active connection to the database.
     * @param entity Entity to be persisted.
     * @param callback A function to be executed when create is done.
     */
    public create(connection: Connection, entity: _E, callback: (err: QueryError, result: OkPacket) => any): void {
        connection.query(`insert into ${this.tableName} set ?`, entity, callback);
    }

    /**
     * Updates an entity.
     * 
     * Can throw exceptions based on null identifiers.
     * 
     * @param connection An active connection to the database.
     * @param entity Entity to be updated.
     * @param callback A function to be executed when the update is completed.
     */
    public update(connection: Connection, entity: _E, callback: (err: QueryError, result: OkPacket) => any): void {
        connection.query(`replace into ${this.tableName} set ?`, entity, callback)
    }

    /**
     * Reads an entity based on its primary key.
     * 
     * @param connection An active connection to the database.
     * @param id A unique identifier.
     * @param callback A function to be executed when the search is completed.
     */
    public findOne(connection: Connection, id: PK, callback: (err: QueryError, result: OkPacket[]) => any): void {
        connection.query(`select * from ${this.tableName} where id = ?`, id, callback);
    }

    /**
     * Deletes an entity based on its primary key.
     * 
     * @param connection An active connection to the database.
     * @param id A unique identifier.
     * @param callback A function to be executed when the deletion is completed.
     */
    public delete(connection: Connection, id: PK, callback: (err: QueryError, result: OkPacket[]) => void): void {
        connection.query(`delete from ${this.tableName} where id = ?`, id, callback);
    }


}

/**
 * A default abstract class for a repository object.
 * 
 * Defines a set of functions that should be implemented for any entity.
 * 
 * @author rodrigo-novaes
 */
export abstract class MySQLRepository<_E extends Entity<PK>, PK> extends CommonMySQLRepository<_E, PK> {

    /**
     * Receives the table name as a parameter.
     * 
     * @param connection An active connection to the database.
     * @param tableName The entity's table name.
     */
    public constructor(tableName: string) {
        super(tableName);
    }

    /**
     * Find all objects from this entity.
     * 
     * It's possible to insert query params to filter results as needed.
     * 
     * @param connection An active connection to the database.
     * @param callback A function to be executed when the query is completed.
     * @param searchOptions The search options.
     */
    public findAll(connection: Connection, callback: (err: QueryError, result: OkPacket[]) => any, searchOptions?: any): void {
        const size: number = searchOptions.size ?
            searchOptions.size : Constants.DEFAULT_QUERY_PARAMS.size;
        const page: number = searchOptions.page ?
            searchOptions.page : Constants.DEFAULT_QUERY_PARAMS.page;
        const sort: string = searchOptions.sort ?
            searchOptions.sort.split(',', 2) : Constants.DEFAULT_QUERY_PARAMS.sort.split(',', 2);
        let query = `select * from ${this.tableName} order by 
            ${connection.escapeId(sort[0])} ${sort[1].toUpperCase()} limit ${(page * size)},${size}`;
        connection.query(query, callback);
    }

}

/**
 * A default interface for an user audited repository.
 * 
 * @param _E An user audited entity type with primary key PK and user identifier type FK.
 * @param PK A serializable primary key's type.
 * @param FK A serializable user identifier's type.
 * @author rodrigo-novaes
 */
export abstract class MySQLAuditedRepository<_E extends UserAuditedEntity<PK, FK>, PK, FK>
    extends CommonMySQLRepository<_E, PK> {

    /**
     * Receives the table name as a parameter.
     * 
     * @param connection An active connection to the database.
     * @param tableName The entity's table name.
     */
    public constructor(tableName: string) {
        super(tableName);
    }

    /**
     * Find all objects from this entity by the user's identifier.
     * 
     * It's possible to insert query params to filter results as needed.
     * 
     * @param connection An active connection to the database.
     * @param userId The user's id.
     * @param callback A function to be executed when the query is completed.
     * @param searchOptions The search options.
     */
    public findAll(
        connection: Connection,
        userId: FK,
        callback: (err: QueryError, result: OkPacket[]) => any,
        searchOptions?: any
    ): void {
        const size: number = searchOptions.size ?
            searchOptions.size : Constants.DEFAULT_QUERY_PARAMS.size;
        const page: number = searchOptions.page ?
            searchOptions.page : Constants.DEFAULT_QUERY_PARAMS.page;
        const sort: string = searchOptions.sort ?
            searchOptions.sort.split(',', 2) : Constants.DEFAULT_QUERY_PARAMS.sort.split(',', 2);
        let query = `select * from ${this.tableName} where user_id like '${userId}' order by 
            ${connection.escapeId(sort[0])} ${sort[1].toUpperCase()} limit ${(page * size)},${size}`;
        connection.query(query, callback);
    }

}

/**
 * A default interface for a role-based audited repository.
 * 
 * Every repository that inherits this class must join to a ROLE-based table.
 * 
 * @author rodrigo-novaes
 */
export abstract class MySQLRoleAuditedRepository<_E extends UserAuditedEntity<PK, FK>, PK, FK>
    extends MySQLAuditedRepository<_E, PK, FK> {

    /**
     * Default constructor instatiates the table's name, as well as the
     * MxN relation between the entity and the user's role.
     * 
     * @param tableName The entity table name.
     * @param joinRoleTableName The MxN role table name.
     */
    public constructor(
        protected tableName: string,
        protected joinRoleTableName: string,
        protected roleTableName?: string
    ) {
        super(tableName);
    }

    /**
     * Find all objects from this entity by the user's identifier.
     * 
     * It's possible to insert query params to filter results as needed.
     * 
     * @param connection An active connection to the database.
     * @param usuario_id The user's id.
     * @param callback A function to be executed when the query is completed.
     * @param searchOptions The search options.
     */
    public findAllByRoles(
        connection: Connection,
        roles: string[],
        callback: (err: QueryError, result: OkPacket[]) => any,
        searchOptions?: any
    ): void {
        const size: number = searchOptions.size ?
            searchOptions.size : Constants.DEFAULT_QUERY_PARAMS.size;
        const page: number = searchOptions.page ?
            searchOptions.page : Constants.DEFAULT_QUERY_PARAMS.page;
        const sort: string = searchOptions.sort ?
            searchOptions.sort.split(',', 2) : Constants.DEFAULT_QUERY_PARAMS.sort.split(',', 2);
        let query = `select distinct ${this.tableName}* from ${this.tableName} inner join ${this.joinRoleTableName} 
            on ${this.joinRoleTableName}.role in (${roles}) ${connection.escapeId(sort[0])} ${sort[1].toUpperCase()} 
            limit ${(page * size)},${size}`;
        connection.query(query, callback);
    }


}