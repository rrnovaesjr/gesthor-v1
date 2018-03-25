import { serverService } from './server.service';
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import { Constants } from './util/constants';
import { environment } from '../environments';
import { Request, Response } from 'express';
import { electronService } from './electron.service';

/**
 * A class that serves the Gesthor's Application functions.
 * 
 * @author rodrigo-novaes
 */
class AppService {

    /**
     * A constant referene to a router object.
     */
    public readonly router: express.Router = express.Router();

    /**
     * A reference to the server.
     */
    public server: http.Server;

    /**
     * Registers responses for a given port number.
     * 
     * @param port A port number.
     */
    private register(port: number): void {
        serverService.getExpressByPort(port).get('*', (req: Request, res: Response) => {
            res.sendFile(this.getAppPath('index.html'));
        });
        serverService.getExpressByPort(port).set('port', port);
        this.server = http.createServer(serverService.getExpressByPort(port));
        this.server.listen(port, () => {
            
        });
    }

    /**
     * Returns the application's path.
     * 
     * @param extra Optional extra string
     */
    private getAppPath(extra?: string): string {
        if(extra) {
            return path.join(electronService.application.getAppPath(), 'desktop-app', 'dist', extra);
        }
        return path.join(electronService.application.getAppPath(), 'desktop-app', 'dist');
    }

    /**
     * Default construcotr.
     * 
     * Initializes the router API.
     */
    public constructor() {

    }

    public config(port: number = Constants.DEFAULT_APP_PORT): void {
        serverService.build(port);
        serverService.use(port, bodyParser.json());
        serverService.use(port, bodyParser.urlencoded({extended: false}));
        serverService.use(port, express.static(this.getAppPath()));
        this.register(port);
    }

}

/**
 * A constant singleton reference to the AppService.
 * 
 * @author rodrigo-novaes
 */
export const appService: AppService = new AppService();