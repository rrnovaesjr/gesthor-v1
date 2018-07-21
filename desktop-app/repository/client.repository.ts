import { MySQLAuditedRepository } from './mysql.repository';
import { _Client } from '../model/client';

/**
 * A private class that defines a repository for the Client entity.
 * 
 * @author rodrigo-novaes
 */
class ClientRepository extends MySQLAuditedRepository<_Client, number, string> {

    /**
     * The table's name.
     */
    public static readonly TABLE_NAME: string = `client`;
}

/**
 * A singleton that implements all client's repository functions for a MySQL database.
 * 
 * @author rodrigo-novaes
 */
export const clientRepository: ClientRepository = new ClientRepository(ClientRepository.TABLE_NAME);