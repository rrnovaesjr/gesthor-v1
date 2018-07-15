import { RestAPIService } from './rest-service.interface';
import { clientRepository } from '../repository/client.repository';
import { _Client, Client } from '../model/client';
import { QueryError, OkPacket } from 'mysql';
import { clientMapper } from './mapper/client.mapper';
import { Request, Response } from 'express';
import { transactionService } from './transaction.service';

/**
 * A client service handler for API requests.
 * 
 * @author rodrigo-novaes
 */
class ClientService implements RestAPIService {

    /**
     * Maps all POST functions for clients;
     */
    public readonly post = [
        {
            url: '/api/client',
            callback: (req: Request, res: Response) => {
                transactionService.doInTransactionWithoutResult(() => {
                    const clientBody: _Client = clientMapper.entityToSQL(req.body);
                    clientRepository.create(clientBody, (err: QueryError, result: OkPacket) => {
                        if (err) {
                            throw err;
                        }
                        let _result: Client = clientBody;
                        _result.id = result.insertId;
                        res.send(_result);
                    });
                });
            }
        }
    ];

    /**
     * Maps all PUT functions for clients.
     */
    public readonly put = [
        {
            url: '/api/client',
            callback: (req: Request, res: Response) => {
                transactionService.doInTransactionWithoutResult(() => {
                    const clientBody: _Client = clientMapper.entityToSQL(req.body);
                    clientRepository.update(clientBody, (err: QueryError, result: OkPacket) => {
                        if (err) {
                            throw err;
                        }
                        let _result: Client = clientBody;
                        res.send(_result);
                    })
                });
            }
        }
    ];

    /**
     * Maps all GET functions for clients.
     */
    public readonly get = [
        {
            url: '/api/client/:user_id',
            callback: (req: Request, res: Response) => {
                transactionService.doInTransactionWithoutResult(() => {
                    const userId: string = req.params.usuario_id;
                    clientRepository.findAllByUsuarioId(userId, (err: QueryError, result: OkPacket[]) => {
                        if (err) {
                            throw err;
                        }
                        let _result: Client[];
                        _result = result && result.length ? clientMapper.manySQLToEntities(result) : [];
                        res.send(_result);
                    }, req.query);
                });
            }
        },
        {
            url: '/api/client/:id',
            callback: (req: Request, res: Response) => {
                transactionService.doInTransactionWithoutResult(() => {
                    const clienteId: number = req.params.id;
                    clientRepository.findOne(clienteId, (err: QueryError, result: OkPacket[]) => {
                        if (err) {
                            throw err;
                        }
                        let _result: Client;
                        _result = result && result.length ? clientMapper.sQLToEntity(result[0]) : null;
                        res.send(_result);
                    });
                });
            }
        }
    ];

    /**
     * Maps all DELETE functions for clients.
     */
    public readonly delete = [
        {
            url: '/api/client/:id',
            callback: (req: Request, res: Response) => {
                transactionService.doInTransactionWithoutResult(() => {
                    const clienteId: number = req.params.id;
                    clientRepository.delete(clienteId, (err: QueryError, result: OkPacket[]) => {
                        if (err) {
                            throw err;
                        }
                        res.send(result);
                    });
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
export const clientService: ClientService = new ClientService();