import { RestAPIBusiness } from './abstract.business';
import { clientRepository } from '../../repository/client.repository';
import { _Client, Client } from '../../model/client';
import { QueryError, OkPacket } from 'mysql';
import { clientMapper } from '../mapper/client.mapper';
import { Request, Response } from 'express';
import { transactionService } from '../transaction.service';
import { serverService } from '../server.service';
import { Connection } from 'mysql2';

/**
 * A client service handler for API requests.
 * 
 * @author rodrigo-novaes
 */
class ClientBusiness implements RestAPIBusiness {

    /**
     * Maps all POST functions for clients;
     */
    public readonly post = [
        {
            url: '/api/client',
            callback: (req: Request, res: Response) => {
                transactionService.doInTransactionWithoutResult((connection: Connection) => {
                    const clientBody: _Client = clientMapper.entityToSQL(req.body);
                    clientRepository.create(connection, clientBody, (err: QueryError, result: OkPacket) => {
                        if (err) {
                            throw err;
                        }
                        let _result: Client = clientBody;
                        _result.id = result.insertId;
                        res.send(_result);
                    });
                }, (err?: any) => {
                    if (err) {
                        res.send(err);
                    }
                });
            },
            jwtCheck: serverService.jwtCheck
        }
    ];

    /**
     * Maps all PUT functions for clients.
     */
    public readonly put = [
        {
            url: '/api/client',
            callback: (req: Request, res: Response) => {
                transactionService.doInTransactionWithoutResult((connection: Connection) => {
                    const clientBody: _Client = clientMapper.entityToSQL(req.body);
                    clientRepository.update(connection, clientBody, (err: QueryError, result: OkPacket) => {
                        if (err) {
                            throw err;
                        }
                        let _result: Client = clientBody;
                        res.send(_result);
                    })
                }, (err?: any) => {
                    if (err) {
                        res.send(err);
                    }
                });
            },
            jwtCheck: serverService.jwtCheck
        }
    ];

    /**
     * Maps all GET functions for clients.
     */
    public readonly get = [
        {
            url: '/api/client/:user_id',
            callback: (req: Request, res: Response) => {
                transactionService.doInTransactionWithoutResult((connection: Connection) => {
                    const userId: string = req.params.user_id;
                    clientRepository.findAllByUsuarioId(connection, userId, (err: QueryError, result: OkPacket[]) => {
                        if (err) {
                            throw err;
                        }
                        let _result: Client[];
                        _result = result && result.length ? clientMapper.manySQLToEntities(result) : [];
                        res.send(_result);
                    }, req.query);
                }, (err?: any) => {
                    if (err) {
                        res.send(err);
                    }
                });
            },
            jwtCheck: serverService.jwtCheck
        },
        {
            url: '/api/client/:id',
            callback: (req: Request, res: Response) => {
                transactionService.doInTransactionWithoutResult((connection: Connection) => {
                    const clienteId: number = req.params.id;
                    clientRepository.findOne(connection, clienteId, (err: QueryError, result: OkPacket[]) => {
                        if (err) {
                            throw err;
                        }
                        let _result: Client;
                        _result = result && result.length ? clientMapper.sQLToEntity(result[0]) : null;
                        res.send(_result);
                    });
                }, (err?: any) => {
                    if (err) {
                        res.send(err);
                    }
                });
            },
            jwtCheck: serverService.jwtCheck
        }
    ];

    /**
     * Maps all DELETE functions for clients.
     */
    public readonly delete = [
        {
            url: '/api/client/:id',
            callback: (req: Request, res: Response) => {
                transactionService.doInTransactionWithoutResult((connection: Connection) => {
                    const clienteId: number = req.params.id;
                    clientRepository.delete(connection, clienteId, (err: QueryError, result: OkPacket[]) => {
                        if (err) {
                            throw err;
                        }
                        res.send(result);
                    });
                }, (err?: any) => {
                    if (err) {
                        res.send(err);
                    }
                });
            },
            jwtCheck: serverService.jwtCheck
        }
    ];
}

/**
 * A singleton object that implements all of client's services.
 * 
 * @author rodrigo-novaes
 */
export const clientBusiness: ClientBusiness = new ClientBusiness();