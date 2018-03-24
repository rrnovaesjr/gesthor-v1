import { RestAPIService } from './rest-service.interface';
import { clienteRepository } from '../repository/cliente.repository';
import { RequestHandler } from 'express';
import { _Cliente, Cliente } from '../../commons/model/cliente';
import { QueryError } from 'mysql';
import { clienteMapper } from './mapper/cliente.mapper';
import { Request, Response } from 'express';

/**
 * A client service handler for API requests.
 * 
 * @author rodrigo-novaes
 */
class ClienteService implements RestAPIService {

    /**
     * Maps all GET functions for clients.
     */
    readonly get = [
        {
            url: '/api/cliente',
            callback: (req: Request, res: Response) => {
                clienteRepository.findAll((err: QueryError, result: _Cliente[]) => {
                    if(err) {
                        res.send(JSON.stringify(err));
                        throw err;
                    }
                    let _result: Cliente[];
                    _result = clienteMapper.manySQLToClients(result);
                    res.send(JSON.stringify(_result));
                });
            }
        }
    ];
}

/**
 * A singleton object that implements all of client's services.
 * 
 * @author rodrigo-novaes
 */
export const clienteService: ClienteService = new ClienteService();