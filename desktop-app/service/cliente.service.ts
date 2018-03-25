import { RestAPIService } from './rest-service.interface';
import { clienteRepository } from '../repository/cliente.repository';
import { RequestHandler } from 'express';
import { _Cliente, Cliente } from '../../commons/model/cliente';
import { QueryError, OkPacket } from 'mysql';
import { clienteMapper } from './mapper/cliente.mapper';
import { Request, Response } from 'express';

/**
 * A client service handler for API requests.
 * 
 * @author rodrigo-novaes
 */
class ClienteService implements RestAPIService {

    /**
     * Maps all POST functions for clients;
     */
    public readonly post = [
        {
            url: '/api/cliente',
            callback: (req: Request, res: Response) => {
                const clienteBody: _Cliente = clienteMapper.entityToSQL(req.body);
                clienteRepository.create(clienteBody, (err: QueryError, result: OkPacket) => {
                    if(err) {
                        res.send(err);
                        return;
                    }
                    let _result: Cliente = clienteBody;
                    _result.id = result.insertId;
                    res.send(_result);
                });
            }   
        }
    ];

    /**
     * Maps all PUT functions for clients.
     */
    public readonly put = [
        {
            url: '/api/cliente',
            callback: (req: Request, res: Response) => {
                const clienteBody: _Cliente = clienteMapper.entityToSQL(req.body);
                clienteRepository.update(clienteBody, (err: QueryError, result: OkPacket) => {
                    if(err) {
                        res.send(err);
                        return;
                    }
                    let _result: Cliente = clienteBody;
                    res.send(_result);
                })
            }
        }
    ];

    /**
     * Maps all GET functions for clients.
     */
    public readonly get = [
        {
            url: '/api/cliente',
            callback: (req: Request, res: Response) => {
                clienteRepository.findAll((err: QueryError, result: OkPacket[]) => {
                    if(err) {
                        res.send(err);
                        return;
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
                clienteRepository.findOne(clienteId, (err: QueryError, result: OkPacket[]) => {
                    if(err) {
                        res.send(err);
                        return;
                    }
                    let _result: Cliente;
                    _result = result && result.length ? clienteMapper.sQLToEntity(result[0]) : null;
                    res.send(_result);
                });
            }
        }
    ];

    /**
     * Maps all DELETE functions for clients.
     */
    public readonly delete = [
        {
            url: '/api/cliente/:id',
            callback: (req: Request, res: Response) => {
                const clienteId: number = req.params.id;
                clienteRepository.delete(clienteId, (err: QueryError, result: OkPacket[]) => {
                    if(err) {
                        res.send(err);
                        return;
                    }
                    res.send(result);
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