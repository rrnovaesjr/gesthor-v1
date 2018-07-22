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

    private static readonly LOGGER: GesthorLogger = new GesthorLogger(AppService.name, 'app-service.log');

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

    /**
     * Registers responses for a given port number.
     * 
     * @param port A port number.
     */
    private register(port: number): void {
        AppService.LOGGER.info("[register()] Registering application on port %d.", port);
        serverService.getExpressByPort(port).get('*', (req: Request, res: Response) => {
            AppService.LOGGER.info("[register()] Registering GET request to return index page.");
            res.sendFile(join(electron.app.getAppPath(), 'desktop-app', 'dist', 'index.html'));
        });
        serverService.getExpressByPort(port).set('port', port);
        this.server = http.createServer(serverService.getExpressByPort(port));
        this.server.listen(port, () => {
            AppService.LOGGER.info("[register()] Application set to listen on port %d.", port);
        });
        AppService.LOGGER.info("[register()] Register terminated.");
    }

    /**
     * Creates a new server to serve the application's interface.
     * 
     * @param port A port number.
     */
    public config(port: number = Constants.DEFAULT_APP_PORT): void {
        AppService.LOGGER.info(`[config()] Preparing to configure the application on port %d:
            1. Using server service to build application;
            2. Using bodyParser();
            3. Using urlencoded();
            4. Using express.static to serve angular application as interface;
            5. Registering the server and setting it to listen.`, port);
        serverService.build(port);
        serverService.use(port, bodyParser.json());
        serverService.use(port, bodyParser.urlencoded({extended: false}));
        serverService.use(port, express.static(join(electron.app.getAppPath(), 'desktop-app', 'dist')));
        this.register(port);
        AppService.LOGGER.info("[config()] Configuration finished.");
    }

}

/**
 * A constant singleton reference to the AppService.
 * 
 * @author rodrigo-novaes
 */
export const appService: AppService = new AppService();