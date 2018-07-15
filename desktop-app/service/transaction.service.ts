import { apiService } from './api.service';
import { QueryError } from 'mysql';

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
    public doInTransactionWithoutResult(proc: () => void): void {
        apiService.connection.beginTransaction((transactionError: QueryError) => {
            if(transactionError) {
                apiService.connection.rollback(() => {
                    throw transactionError;
                });
            }
            try {
                proc();
            } catch(err) {
                apiService.connection.rollback(() => {
                    throw err;
                });
            }
            apiService.connection.commit((commitError: QueryError) => {
                if(commitError) {
                    apiService.connection.rollback(() => {
                        throw commitError;
                    });
                }
            });
        });
    }
}

/**
 * Exports a singleton reference for the transaction service.
 */
export const transactionService = new TransactionService();