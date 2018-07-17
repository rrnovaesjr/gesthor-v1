import { QueryError, OkPacket } from 'mysql2';
import { Entity, UserAuditedEntity } from '../model/abstract/entity';
import { Constants } from '../service/util/constants';
import { connectionService } from '../service/connection.service';

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
     * @param entity Entity to be persisted.
     * @param callback A function to be executed when create is done.
     */
    public create(entity: _E, callback: (err: QueryError, result: OkPacket) => any): void {
        connectionService.connection.query(`insert into ${this.tableName} set ?`, entity, callback);
    }

    /**
     * Updates an entity.
     * 
     * Can throw exceptions based on null identifiers.
     * 
     * @param entity Entity to be updated.
     * @param callback A function to be executed when the update is completed.
     */
    public update(entity: _E, callback: (err: QueryError, result: OkPacket) => any): void {
        connectionService.connection.query(`replace into ${this.tableName} set ?`, entity, callback)
    }

    /**
     * Reads an entity based on its primary key.
     * 
     * @param id A unique identifier.
     * @param callback A function to be executed when the search is completed.
     */
    public findOne(id: PK, callback: (err: QueryError, result: OkPacket[]) => any): void {
        connectionService.connection.query(`select * from ${this.tableName} where id = ?`, id, callback);
    }

    /**
     * Deletes an entity based on its primary key.
     * 
     * @param id A unique identifier.
     * @param callback A function to be executed when the deletion is completed.
     */
    public delete(id: PK, callback: (err: QueryError, result: OkPacket[]) => void): void {
        connectionService.connection.query(`delete from ${this.tableName} where id = ?`, id, callback);
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
     * @param callback A function to be executed when the query is completed.
     * @param searchOptions The search options.
     */
    public findAll(callback: (err: QueryError, result: OkPacket[]) => any, searchOptions?: any): void {
        const size: number = searchOptions.size ?
            searchOptions.size : Constants.DEFAULT_QUERY_PARAMS.size;
        const page: number = searchOptions.page ?
            searchOptions.page : Constants.DEFAULT_QUERY_PARAMS.page;
        const sort: string = searchOptions.sort ?
            searchOptions.sort.split(',', 2) : Constants.DEFAULT_QUERY_PARAMS.sort.split(',', 2);
        let query = `select * from ${this.tableName} order by 
            ${connectionService.connection.escapeId(sort[0])} ${sort[1].toUpperCase()} limit ${(page * size)},${size}`;
            connectionService.connection.query(query, callback);
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
     * @param usuario_id The user's id.
     * @param callback A function to be executed when the query is completed.
     * @param searchOptions The search options.
     */
    public findAllByUsuarioId(
        usuario_id: FK,
        callback: (err: QueryError, result: OkPacket[]) => any,
        searchOptions?: any
    ): void {
        const size: number = searchOptions.size ?
            searchOptions.size : Constants.DEFAULT_QUERY_PARAMS.size;
        const page: number = searchOptions.page ?
            searchOptions.page : Constants.DEFAULT_QUERY_PARAMS.page;
        const sort: string = searchOptions.sort ?
            searchOptions.sort.split(',', 2) : Constants.DEFAULT_QUERY_PARAMS.sort.split(',', 2);
        let query = `select * from ${this.tableName} where usuario_id like '${usuario_id}' order by 
            ${connectionService.connection.escapeId(sort[0])} ${sort[1].toUpperCase()} limit ${(page * size)},${size}`;
            connectionService.connection.query(query, callback);
    }

}