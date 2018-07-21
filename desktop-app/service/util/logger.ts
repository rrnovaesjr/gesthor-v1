import { Logger, createLogger, format, transports, loggers } from 'winston';
import { environment } from '../../environments';
import { TransformableInfo } from 'logform';
import { appService } from '../app.service';

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
        return `${info.timestamp}[${info.label}] ${info.level}: ${info.message}`;
    });

    /**
     * A constant reference to the log's path.
     */
    private logPath: string;

    /**
     * A public constructor that instantiates this log instance. Creates an entry for
     * a class named `className`, directed to the file `filename`.
     * 
     * @param className The class name for which the log is used.
     * @param filename The destination filename for the log.
     */
    public constructor(private className: string = 'Generics', private filename: string = 'combined.log') {

    }

    /**
     * Writes a message to the debug level.
     * 
     * @param message Message format, as a string.
     * @param params The message's params.
     */
    public debug(message: string, ...params: any[]): void {
        this._lazilyCreateLogInstance();
        this.winstonLogger.log('debug', message, params);
    }

    /**
     * Writes a message to the info level.
     * 
     * @param message Message format, as a string.
     * @param params The message's params.
     */
    public info(message: string, ...params: any[]): void {
        this._lazilyCreateLogInstance();
        this.winstonLogger.log('info', message, params);
    }

    /**
     * Writes a message to the error level.
     * 
     * @param message Message format, as a string.
     * @param params The message's params.
     */
    public error(message: string, ...params: any[]): void {
        this._lazilyCreateLogInstance();
        this.winstonLogger.log('error', message, params);
    }

    /**
     * Lazily creates a log instance.
     */
    private _lazilyCreateLogInstance(): void {
        if (!this.winstonLogger) {
            this.logPath = appService.getAppPath(`../data/logs/${this.filename}`);
            console.log(this.logPath);
            this.winstonLogger = createLogger({
                format: format.combine(
                    format.label({ label: this.className }), format.timestamp(), format.splat(), this.printfFormat
                ),
                transports: [
                    new transports.File({
                        filename: this.logPath
                    })
                ]
            });
            if (!environment.production) {
                this.winstonLogger.add(new transports.Console);
            }
        }
    }

}