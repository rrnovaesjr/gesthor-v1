import { RestAPIService } from './rest-service.interface';
import { clienteRepository } from '../repository/cliente.repository';
import { RequestHandler } from 'express';
import { _Cliente, Cliente } from '../../commons/model/cliente';
import { QueryError } from 'mysql';
import { clienteMapper } from './mapper/cliente.mapper';
import { Request, Response } from 'express';
import { Table } from '../repository/table.interface';

/**
 * A client service handler for API requests.
 * 
 * @author rodrigo-novaes
 */
class ClienteService implements RestAPIService {

    /**
     * Maps all POST functions for clients;
     */
    readonly post = [
        {
            url: '/api/cliente',
            callback: (req: Request, res: Response) => {
                const clienteBody: _Cliente = clienteMapper.entityToSQL(req.body);
                clienteRepository.create(clienteBody, (err: QueryError, result: Table<_Cliente>[]) => {
                    if(err) {
                        res.send(err.name);
                    }
                    let _result: Cliente;
                    _result = result && result.length ? clienteMapper.sQLToEntity(result[0]) : null;
                    res.send(_result);
                });
            }   
        }
    ]

    /**
     * Maps all GET functions for clients.
     */
    readonly get = [
        {
            url: '/api/cliente',
            callback: (req: Request, res: Response) => {
                clienteRepository.findAll((err: QueryError, result: Table<_Cliente>[]) => {
                    if(err) {
                        res.send(err.name);
                    }
                    let _result: Cliente[];
                    _result = result && result.length ? clienteMapper.manySQLToEntities(result) : [];
                    res.send(_result);
                });
            }
        },
        {
            url: '/api/cliente/:id',
            callback: (req: Request, res: Response) => {
                const clienteId: number = req.params.id;
                clienteRepository.findOne(clienteId, (err: QueryError, result: Table<_Cliente>[]) => {
                    if(err) {
                        res.send(err.name);
                    }
                    let ppp = Object.assign<_Cliente, Table<_Cliente>>({}, result[0]);
                    console.log(ppp);
                    let _result: Cliente;
                    _result = result && result.length ? clienteMapper.sQLToEntity(result[0]) : null;
                    res.send(_result);
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