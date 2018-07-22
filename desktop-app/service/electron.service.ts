import * as electron from 'electron';
import * as url from 'url';
import { AbstractService } from './abstract.service';
import { GesthorLogger } from './util/logger';
import { join } from 'path';

/**
 * This class encapsulates the fundamental functions from Electron's API into a singleton reference.
 * 
 * Any service/resource that imports this service can access the same functions the Electron's API does.
 * 
 * @author rodrigo-novaes
 */
class ElectronService extends AbstractService {

    private logger: GesthorLogger = new GesthorLogger(ElectronService.name, 'electron-service.log');

    /**
     * Default window's width.
     */
    public static readonly MAIN_WINDOW_DEFAULT_WIDTH: number = 800;

    /**
     * Default window's height.
     */
    public static readonly MAIN_WINDOW_DEFAULT_HEIGHT: number = 600;

    /**
     * Default `BrowserWindow`'s default configuration.
     */
    public static readonly BROWSER_WINDOW_DEFAULT_CONFIG: electron.BrowserWindowConstructorOptions = {
        width: 800,
        height: 600
    };

    /**
     * Global reference to the Electron application.
     */
    public application: electron.App = electron.app;

    /**
     * Global reference to the main window.
     */
    public rootWindow: electron.BrowserWindow;

    public constructor() {
        super();
    }

    /**
     * Function executed on Electron application start.
     * 
     * This sets the root window's reference, as well as sets its parameters.
     */
    public _onAppStart(initialURL: string, config?: electron.BrowserWindowConstructorOptions, maximized?: boolean, menu?: electron.Menu): void {
        this.logger.info("Hello world.");
        this.rootWindow = new electron.BrowserWindow(config ? config : ElectronService.BROWSER_WINDOW_DEFAULT_CONFIG);
        if(maximized || maximized == null || maximized == undefined) {
            this.rootWindow.maximize();
        }
        this.rootWindow.loadURL(url.format(initialURL));
        this.rootWindow.on('close', (event: electron.Event) => this.rootWindow = null);
    }

    /**
     * Initializes application given received parameters.
     * 
     * The default operations are defined as follows:
     * 
     * - On ready, a function must set the given parameters to the app and its main window;
     * 
     * - On activate, same procedures are executed as above, although if, and only if, main window
     * is `null`;
     * 
     * - When all windows are closed, set Electron to quit the application.
     * 
     * This function returns the application reference to the caller.
     * 
     * @param initialURL The initial loading URL.
     * @param config Main window's configuration.
     * @param maximized Set if main window must be maximized.
     * @param menu Set application's menu.
     */
    public appInit(initialURL: string, config?: electron.BrowserWindowConstructorOptions, maximized?: boolean, menu?: electron.Menu): electron.App {
        this.application = this.application.on('ready', () => this._onAppStart(initialURL, config, maximized, menu));
        this.application = this.application.on('activate', () => {
            if(this.rootWindow == null) {
                this._onAppStart(initialURL, config, maximized, menu);
            }
        });
        this.application = this.application.on('window-all-closed', () => {
            if(process.platform !== 'darwin') {
                this.application.quit();
            }
        });
        return this.application;
    }

}

/**
 * A constant singleton reference to the ElectronService API.
 * 
 * @author rodrigo-novaes
 */
export const electronService: ElectronService = new ElectronService();