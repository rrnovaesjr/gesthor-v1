import { GesthorLogger } from "./util/logger";
import { config } from "winston";
import { ArrayObservable } from "rxjs/observable/ArrayObservable";

/**
 * An interface for handling errors thrown throughout the application. Any class instantiating
 * from this interface must implement error-handling routines.
 * 
 * @author rodrigo-novaes
 */
export interface ErrorHandlerService {

    /**
     * An interface for handling application errors.
     * 
     * @param err An error instance.
     * @param params Optional parameters to be called by the method.
     */
    handleError(err: Error, ...params: any[]): void; 

}

/**
 * An interface for logging information throughout the application. Any class instantiating
 * from this interface must implement routines for returning logs.
 * 
 * @author rodrigo-novaes
 */
export interface LoggerService {

    /**
     * An interface for returning the loggers created for a service.
     */
    getLoggers(): GesthorLogger | GesthorLogger[];
}

/**
 * An abstract service class.
 * 
 * This class contains the main methods any service should implement.
 * 
 * @author rodrigo-novaes
 */
export abstract class AbstractLoggerErrorHandlerService implements LoggerService, ErrorHandlerService {

    /**
     * An abstract logger that points to the combined.log file.
     */
    protected static readonly ABSTRACT_LOGGER: GesthorLogger = new GesthorLogger(AbstractLoggerErrorHandlerService.name);

    /**
     * A default constructor.
     */
    public constructor() {

    }

    /**
     * A general method to handle exceptions thrown in the application.
     * 
     * This method uses the loggers created for each class in order to log the error
     * information, such as the name, error message and stack trace.
     * 
     * @param err Error instance.
     * @param params Additional parameters.
     */
    public handleError(err: Error, ...params: any[]): void {
        try {
            const loggers: GesthorLogger | GesthorLogger[] = this.getLoggers();
            let loggersToWrite: GesthorLogger[] = [];
            if(loggers == null || loggers == []) {
                loggersToWrite.push(AbstractLoggerErrorHandlerService.ABSTRACT_LOGGER);
            }
            else if(Array.isArray(loggers)) {
                for(let log of loggers) {
                    if(log.levels.error) {
                        loggersToWrite.push(log);
                    }
                }
            }
            else if(typeof loggers === GesthorLogger.name) {
                loggersToWrite.push(loggers);
            }
            for(let log of loggersToWrite) {
                log.error("[handleError()] An exception has occurred: name = %s. message = %s. Additional information: %s.", err.name, err.message, JSON.stringify(params));
                if(err.stack) {
                    log.error("[handleError()] Stack trace: %s", err.stack);
                }
            }
        } catch(exc) {
            AbstractLoggerErrorHandlerService.ABSTRACT_LOGGER.error("[handleError()] A general error has occurred: name = %s. message = %s.", exc.name, exc.message);
            if(exc.stack) {
                AbstractLoggerErrorHandlerService.ABSTRACT_LOGGER.error("[handleError()] Stack trace: %s.", exc.stack);
            }
        }
    }

    /**
     * Returns one or more loggers associated to the service.
     */
    public abstract getLoggers(): GesthorLogger | GesthorLogger[];

}