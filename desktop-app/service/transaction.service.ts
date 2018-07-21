import { QueryError } from 'mysql';
import { Pool, createPool, PoolConnection, Connection } from 'mysql2';
import { environment } from '../environments';

/**
 * A class that creates functions that controls all transactions between the system's
 * back-end and its database.
 * 
 * @author rodrigo-novaes
 */
class TransactionService {

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
        this.pool.getConnection((err: NodeJS.ErrnoException, connection: PoolConnection) => {
            connection.beginTransaction((transactionError: QueryError) => {
                if (transactionError) {
                    connection.rollback(() => {
                        connection.release();
                        this.excHandler(transactionError, excHandler);
                    });
                }
                try {
                    proc(connection);
                } catch (err) {
                    connection.rollback(() => {
                        connection.release();
                        this.excHandler(err, excHandler);
                    });
                }
                connection.commit((commitError: QueryError) => {
                    if (commitError) {
                        connection.rollback(() => {
                            this.excHandler(commitError, excHandler);
                        });
                    }
                });
                connection.release();
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
        if (excHandler) {
            excHandler(err);
            return;
        }
        throw err;
    }
}

/**
 * Exports a singleton reference for the transaction service.
 */
export const transactionService = new TransactionService();