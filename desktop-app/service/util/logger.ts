import { Logger, createLogger, format, transports } from 'winston';
import { environment } from '../../environments';
import { TransformableInfo } from 'logform';

export class GesthorLogger {

    private readonly winstonLogger: Logger;

    private readonly myFormat = format.printf((info: TransformableInfo) => {
        return `${info.timestamp}[${info.label}] ${info.level}: ${info.message}`;
    });

    /**
     * 
     * @param filename 
     */
    public constructor(className: string = 'Generics', filename: string = 'combined.log') {
        this.winstonLogger = createLogger({
            format: format.combine(format.label({ label: className }), format.timestamp(), this.myFormat),
            transports: [
                new transports.File({
                    filename: filename
                })
            ]
        });
        if (!environment.production) {
            this.winstonLogger.add(new transports.Console);
        }
    }

    public debug(message: string, ...params: any[]): void {
        this.winstonLogger.debug(message, params);
    }

    public info(message: string, ...params: any[]): void {
        this.winstonLogger.info(message, params);
    }

    public error(message: string, ...params: any[]): void {
        this.winstonLogger.error(message, params);
    }

}