import { QueryError } from 'mysql';
import { connectionService } from './connection.service';

/**
 * A class that creates functions that controls all transactions between the system's
 * back-end and its database.
 * 
 * @author rodrigo-novaes
 */
class TransactionService {

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
    public doInTransactionWithoutResult(proc: () => void, excHandler?: (err?: any) => void): void {
        connectionService.connection.beginTransaction((transactionError: QueryError) => {
            if (transactionError) {
                connectionService.connection.rollback(() => {
                    this.excHandler(transactionError, excHandler);
                });
            }
            try {
                proc();
            } catch (err) {
                connectionService.connection.rollback(() => {
                    this.excHandler(err, excHandler);
                });
            }
            connectionService.connection.commit((commitError: QueryError) => {
                if (commitError) {
                    connectionService.connection.rollback(() => {
                        this.excHandler(commitError, excHandler);
                    });
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
    private excHandler(err: any, excHandler?: (err?: any) => void): void {
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