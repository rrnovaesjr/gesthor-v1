import { MySQLAuditedRepository } from './mysql.repository';
import { Cliente, _Cliente } from '../model/cliente/';
import { apiService } from '../service/api.service';
import { QueryError, RowDataPacket, Query, OkPacket } from 'mysql';
import { Constants } from '../service/util/constants';

/**
 * A private class that defines a repository for the Client entity.
 * 
 * @author rodrigo-novaes
 */
class ClienteRepository extends MySQLAuditedRepository<_Cliente, number, string> {

    /**
     * The table's name.
     */
    public static readonly TABLE_NAME: string = `cliente`;
}

/**
 * A singleton that implements all client's repository functions for a MySQL database.
 * 
 * @author rodrigo-novaes
 */
export const clienteRepository: ClienteRepository = new ClienteRepository(ClienteRepository.TABLE_NAME);