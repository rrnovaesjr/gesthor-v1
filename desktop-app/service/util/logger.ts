import { Logger, createLogger, format, transports, loggers, config } from 'winston';
import { environment } from '../../environments';
import { TransformableInfo } from 'logform';
import * as electron from 'electron';
import { join } from 'path';
import { AbstractConfigSetLevels } from 'winston/lib/winston/config';

/**
 * An implementation of a Logger using winston logger library.
 * 
 * This logger generates files that can be accessed and queried by the application.
 * 
 * @author rodrigo-novaes
 */
export class GesthorLogger {

    /**
     * A private reference to this winston logger instance.
     */
    private winstonLogger: Logger;

    /**
     * A constant reference to the debug message format.
     */
    private readonly printfFormat = format.printf((info: TransformableInfo) => {
        return `[${info.timestamp}][${info.level}][${info.label}] ${info.message}`;
    });

    /**
     * A constant reference to the log's path.
     */
    private logPath: string;

    /**
     * A public constructor that instantiates this log instance. Creates an entry for
     * a class named `className`, directed to the file `filename`, with levels `levels`.
     * 
     * @param className The class name for which the log is used.
     * @param fileName The destination filename for the log.
     * @param levels The levels to be logged in this instance.
     */
    public constructor(
        public className: string = 'Generics', 
        public fileName: string = 'combined.log', 
        private levels: AbstractConfigSetLevels = config.npm.levels
    ) {
        this.logPath = join(electron.app.getAppPath(), 'desktop-app', 'data', 'logs', this.fileName);
        this.winstonLogger = createLogger({
            levels: this.levels,
            format: format.combine(
                format.label({ label: this.className }), format.timestamp(), format.splat(), this.printfFormat
            ),
            transports: [
                new transports.File({
                    filename: this.logPath,
                })
            ]
        });
        if (!environment.production) {
            this.winstonLogger.add(new transports.Console);
        }
    }

    /**
     * Writes a message in the error level.
     * 
     * @param message Message format, as a string.
     * @param params The message's params.
     */
    public error(message: string, ...params: any[]): void {
        this.winstonLogger.log('error', message, params);
    }

    /**
     * Writes a message in the warn level.
     * 
     * @param message Message format, as a string.
     * @param params The message's params.
     */
    public warn(message: string, ...params: any[]): void {
        this.winstonLogger.log('warn', message, params);
    }

    /**
     * Writes a message in the info level.
     * 
     * @param message Message format, as a string.
     * @param params The message's params.
     */
    public info(message: string, ...params: any[]): void {
        this.winstonLogger.log('info', message, params);
    }

    /**
     * Writes a message in the http level.
     * 
     * @param message Message format, as a string.
     * @param params The message's params.
     */
    public http(message: string, ...params: any[]): void {
        this.winstonLogger.log('http', message, params);
    }

    /**
     * Writes a message in the verbose level.
     * 
     * @param message Message format, as a string.
     * @param params The message's params.
     */
    public verbose(message: string, ...params: any[]): void {
        this.winstonLogger.log('verbose', message, params);
    }

    /**
     * Writes a message in the debug level.
     * 
     * @param message Message format, as a string.
     * @param params The message's params.
     */
    public debug(message: string, ...params: any[]): void {
        this.winstonLogger.log('debug', message, params);
    }

    /**
     * Writes a message in the silly level.
     * 
     * @param message Message format, as a string.
     * @param params The message's params.
     */
    public silly(message: string, ...params: any[]): void {
        this.winstonLogger.log('silly', message, params);
    }

    /**
     * Writes a message in the `level` level.
     * 
     * @param message Message format, as a string.
     * @param params The message's params.
     */
    public write(level: string, message: string, ...params: any[]): void {
        this.winstonLogger.log(level, message, params);
    }

}