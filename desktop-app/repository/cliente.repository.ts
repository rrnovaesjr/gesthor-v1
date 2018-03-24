import { MySQLRepository } from './mysql-repository.interface';
import { Cliente, _Cliente } from '../../commons/model/cliente';
import { ApiService } from '../service/api.service';
import { QueryError, RowDataPacket } from 'mysql';

/**
 * A private class that defines a repository for the Client entity.
 * 
 * @author rodrigo-novaes
 */
class ClientRepository implements MySQLRepository<Cliente, number> {

    /**
     * Creates a client.
     * 
     * @param client Client with null identifier.
     */
    public create(client: Cliente): Cliente {
        let queryResult: Cliente;
        ApiService.connection.query(`insert into cliente set ?`, client, (err: QueryError, result: _Cliente[]) => {
            console.log(result);
        });
        return null;
    }

    /**
     * Updates a client.
     * 
     * @param client Client with an identifier.
     */
    public update(client: Cliente): Cliente {
        return null;
    }

    /**
     * Read one client by its identifier.
     * 
     * @param id A unique identifier.
     */
    public findOne(id: number): Cliente {
        return null;
    }

    /**
     * Finds all clients with optional params.
     * 
     * @param params Query parameters.
     */
    public findAll(params?: any[]): Cliente[] {
        let queryResult: Cliente[];
        ApiService.connection.query(`select * from cliente`, (err: QueryError, result: _Cliente[]) => {
            if(err) {
                throw err;
            }
            queryResult = 
        });
        return [];
    }

    /**
     * Searches clients with optional params.
     * 
     * @param params Query parameters.
     * @param options Search options.
     */
    public search(params?: any[], options?: any[]): Cliente[] {
        return null;
    }

}

/**
 * A singleton that implements all client's repository functions for a MySQL database.
 * 
 * @author rodrigo-novaes
 */
export const clientRepository: ClientRepository = new ClientRepository();