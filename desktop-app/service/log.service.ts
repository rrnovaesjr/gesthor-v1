import { appService } from './app.service';
import { environment } from '../environments';
const manager = require('simple-node-logger').createLogManager();

/**
 * A service to log data.
 * 
 * @author rodrigo-novaes
 */
class LoggerService {

    /**
     * Stores loggers instances according to their filenames.
     */
    private logInstances: Map<string, any> = new Map();

    /**
     * Creates a new logger for a given `key`. `key` must be a valid class of this application, 
     * where an appender is referred by it.
     * 
     * @param key String key for the application.
     */
    public createInstance(key: string): void {
        const filename: string = appService.getAppPath(environment.logsDir);
        this.logInstances.set(key, manager.createLogger(key));
    }

    public log(): void {

    }


}