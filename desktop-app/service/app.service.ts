import { serverService } from './server.service';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as electron from 'electron';
import { Constants } from './util/constants';
import { Request, Response } from 'express';
import { electronService } from './electron.service';
import { AbstractService } from './abstract.service';
import { join } from 'path';
import { GesthorLogger } from './util/logger';

/**
 * A class that serves the Gesthor's Application functions.
 * 
 * @author rodrigo-novaes
 */
class AppService extends AbstractService {

    private logger: GesthorLogger = new GesthorLogger(AppService.name, 'app-service.log');

    /**
     * A constant referene to a router object.
     */
    public readonly router: express.Router = express.Router();

    /**
     * A reference to the server.
     */
    public server: http.Server;

    /**
     * Default construcotr.
     * 
     * Initializes the router API.
     */
    public constructor() {
        super();
    }

    public postConstruct(): void {
        
    }

    /**
     * Registers responses for a given port number.
     * 
     * @param port A port number.
     */
    private register(port: number): void {
        this.logger.info("Registering application on port %d.", port);
        serverService.getExpressByPort(port).get('*', (req: Request, res: Response) => {
            this.logger.info("Registering GET request to return index page.");
            res.sendFile(join(electron.app.getAppPath(), 'desktop-app', 'dist', 'index.html'));
        });
        serverService.getExpressByPort(port).set('port', port);
        this.server = http.createServer(serverService.getExpressByPort(port));
        this.server.listen(port, () => {
            this.logger.info("Application set to listen on port %d.", port);
        });
        this.logger.info("Register terminated.");
    }

    /**
     * Creates a new server to serve the application's interface.
     * 
     * @param port A port number.
     */
    public config(port: number = Constants.DEFAULT_APP_PORT): void {
        serverService.build(port);
        serverService.use(port, bodyParser.json());
        serverService.use(port, bodyParser.urlencoded({extended: false}));
        serverService.use(port, express.static(join(electron.app.getAppPath(), 'desktop-app', 'dist')));
        this.register(port);
    }

}

/**
 * A constant singleton reference to the AppService.
 * 
 * @author rodrigo-novaes
 */
export const appService: AppService = new AppService();