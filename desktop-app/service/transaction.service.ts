import { QueryError } from 'mysql';
import { Pool, createPool, PoolConnection, Connection } from 'mysql2';
import { environment } from '../environments';
import { GesthorLogger } from './util/logger';
import { AbstractLoggerService } from './abstract.service';

/**
 * A class that creates functions that controls all transactions between the system's
 * back-end and its database.
 * 
 * @author rodrigo-novaes
 */
class TransactionService extends AbstractLoggerService {

    /**
     * A constant static reference to a logger object.
     */
    private static readonly LOGGER: GesthorLogger = new GesthorLogger(TransactionService.name, 'transaction-service.log');

    /**
     * A constant reference to the pool of connections to the database.
     * 
     * As the documentation says, each connection is lazily loaded by the server.
     */
    private readonly pool: Pool = createPool(environment.databaseConfig);

    /**
     * Opens and execute a transaction for the function `proc` received as a parameter.
     * 
     * If the transaction fails in any point, a rollback is executed and the correspondent
     * error is thrown.
     * 
     * This function executes only void transactions.
     * 
     * @param proc Function to be executed inside the void transactional body.
     */
    public doInTransactionWithoutResult(proc: (connection: Connection) => void, excHandler?: (err?: any) => void): void {
        TransactionService.LOGGER.info("[doInTransactionWithoutResult()] Opening new connection.");
        this.pool.getConnection((err: NodeJS.ErrnoException, connection: PoolConnection) => {
            TransactionService.LOGGER.info("[doInTransactionWithoutResult()] Attempt to get new connection.");
            if (err) {
                this.excHandler(err, excHandler);
            }
            TransactionService.LOGGER.info("[doInTransactionWithoutResult()] Connection opened with id = %d.", connection.threadId);
            connection.beginTransaction((transactionError: QueryError) => {
                TransactionService.LOGGER.info("[doInTransactionWithoutResult()] Transaction begin.");
                if (transactionError) {
                    connection.rollback(() => {
                        connection.release();
                        this.excHandler(transactionError, excHandler);
                    });
                }
                else {
                    try {
                        proc(connection);
                    } catch (errorInTransaction) {
                        connection.rollback(() => {
                            connection.release();
                            this.excHandler(errorInTransaction, excHandler);
                        });
                    }
                    connection.commit((commitError: QueryError) => {
                        if (commitError) {
                            connection.rollback(() => {
                                connection.release();
                                this.excHandler(commitError, excHandler);
                            });
                        }
                        connection.release();
                        TransactionService.LOGGER.info("[doInTransactionWithoutResult()] Transaction committed.");
                    });
                    TransactionService.LOGGER.info("[doInTransactionWithoutResult()] Transaction finished.");
                }
            });
        });
    }

    /**
     * Handles exceptions ocurred during a void transaction. If a customized handler
     * is passed, then it is used. Otherwise, the exception is thrown.
     * 
     * @param err An exception instance.
     * @param excHandler An exception handler function. In this function's scope,
     * a transaction rollback has been already executed.
     */
    private excHandler(err: Error, excHandler?: (err?: Error) => void): void {
        TransactionService.LOGGER.error("[excHandler()] Error! Transaction is being rolled back and connection was released.\n%s: %s.", err.name, err.message);
        if (excHandler) {
            excHandler(err);
            return;
        }
        throw err;
    }

    /**
     * Returns the LOGGER instance of the Transaction Service.
     */
    public getLoggers(): GesthorLogger | GesthorLogger[] {
        return TransactionService.LOGGER;
    }
    
}

/**
 * Exports a singleton reference for the transaction service.
 */
export const transactionService = new TransactionService();