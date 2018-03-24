import { MySQLRepository } from './mysql-repository.interface';
import { Cliente, _Cliente } from '../../commons/model/cliente';
import { ApiService } from '../service/api.service';
import { QueryError, RowDataPacket } from 'mysql';
import { Query } from 'mysql';
import { Table } from './table.interface';

/**
 * A private class that defines a repository for the Client entity.
 * 
 * @author rodrigo-novaes
 */
class ClienteRepository implements MySQLRepository<_Cliente, number> {

    /**
     * Creates a client.
     * 
     * @param cliente Client with null identifier.
     */
    public create(cliente: _Cliente, callback: (err: QueryError, result: Table<_Cliente>[]) => any): void {
        ApiService.connection.query('insert into `cliente` set ?', cliente, callback);
    }

    /**
     * Updates a client.
     * 
     * @param client Client with an identifier.
     */
    public update(client: _Cliente, callback: (err: QueryError, result: Table<_Cliente>[]) => any): void {
        ApiService.connection.query('update `cliente` set ?', client, callback);
    }

    /**
     * Read one client by its identifier.
     * 
     * @param id A unique identifier.
     */
    public findOne(id: number, callback: (err: QueryError, result: Table<_Cliente>[]) => any): void {
        ApiService.connection.query('select * from `cliente` where id = ' + id, callback);
    }

    /**
     * Finds all clients with optional params.
     * 
     * @param params Query parameters.
     */
    public findAll(callback: (err: QueryError, result: Table<_Cliente>[]) => any, params?: any[]): void {
        ApiService.connection.query('select * from `cliente`', callback);
    }

    /**
     * Deletes a client.
     * 
     * @param id Client's identifier.
     * @param callback A callback to be executed when client is deleted.
     */
    public delete(id: number, callback: (err: QueryError, result: Table<_Cliente>[]) => any): void {

    }

    /**
     * Searches clients with optional params.
     * 
     * @param params Query parameters.
     * @param options Search options.
     */
    public search(callback: (err: QueryError, result: Table<_Cliente>[]) => any, params?: any[], options?: any[]): Query {
        return null;
    }

}

/**
 * A singleton that implements all client's repository functions for a MySQL database.
 * 
 * @author rodrigo-novaes
 */
export const clienteRepository: ClienteRepository = new ClienteRepository();