import { QueryError, RowDataPacket } from 'mysql2';
import { Table } from '../repository/table.interface'

/**
 * A default interface for a repository object.
 * 
 * Defines a set of functions that should be implemented for any entity.
 * 
 * @author rodrigo-novaes
 */
export interface MySQLRepository<_E, PK> {

    /**
     * Creates an entity.
     * 
     * Can throw exceptions based on multiple identifiers definitions.
     * 
     * @param entity Entity to be persisted.
     * @param callback A function to be executed when create is done.
     */
    create(entity: _E, callback: (err: QueryError, result: Table<_E>[]) => any): void;

    /**
     * Updates an entity.
     * 
     * Can throw exceptions based on null identifiers.
     * 
     * @param entity Entity to be updated.
     * @param callback A function to be executed when the update is completed.
     */
    update(entity: _E, callback: (err: QueryError, result: Table<_E>[]) => any): void;

    /**
     * Reads an entity based on its primary key.
     * 
     * @param id A unique identifier.
     * @param callback A function to be executed when the search is completed.
     */
    findOne(id: PK, callback: (err: QueryError, result: Table<_E>[]) => any): void;

    /**
     * Find all objects from this entity.
     * 
     * It's possible to insert query params to filter results as needed.
     * 
     * @param callback A function to be executed when the query is completed.
     */
    findAll(callback: (err: QueryError, result: Table<_E>[]) => any): void;

    /**
     * Deletes an entity based on its primary key.
     * 
     * @param id A unique identifier.
     * @param callback A function to be executed when the deletion is completed.
     */
    delete(id: PK, callback: (err: QueryError, result: Table<_E>[]) => void): void;

    /**
     * Finds objects based on optional search parameters.
     * 
     * @param callback A function to be executed when the search is completed.
     * @param params Optional query params.
     * @param searchOptions Optional search parameters.
     */
    search(callback: (err: QueryError, result: Table<_E>[]) => any, params?: any[], searchOptions?: any[]): void;
}