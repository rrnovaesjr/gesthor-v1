import * as electron from 'electron';
import * as path from 'path';
import * as url from 'url';

/**
 * This namespace encapsulates the fundamental functions from Electron's API into a singleton reference.
 * 
 * Any service/resource that imports this service can access the same functions the Electron's API does.
 * 
 * @author rodrigo-novaes
 */
export namespace ElectronService {

    /**
     * Default window's width.
     */
    export const MAIN_WINDOW_DEFAULT_WIDTH: number = 800;

    /**
     * Default window's height.
     */
    export const MAIN_WINDOW_DEFAULT_HEIGHT: number = 600;

    /**
     * Default `BrowserWindow`'s default configuration.
     */
    export const BROWSER_WINDOW_DEFAULT_CONFIG: electron.BrowserWindowConstructorOptions = {
        width: 800,
        height: 600
    };

    /**
     * Global constant reference to the Electron application.
     */
    export var application: electron.App = electron.app;

    /**
     * Global constant reference to the main window.
     */
    export var rootWindow: electron.BrowserWindow;

    /**
     * Function executed on Electron application start.
     * 
     * This sets the root window's reference, as well as sets its parameters.
     */
    function _onAppStart(initialURL: string, config?: electron.BrowserWindowConstructorOptions, maximized?: boolean, menu?: electron.Menu): void {
        rootWindow = new electron.BrowserWindow(config ? config : BROWSER_WINDOW_DEFAULT_CONFIG);
        if(maximized || maximized == null || maximized == undefined) {
            ElectronService.rootWindow.maximize();
        }
        rootWindow.loadURL(url.format(initialURL));
        rootWindow.on('close', (event: electron.Event) => rootWindow = null);
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
    export function appInit(initialURL: string, config?: electron.BrowserWindowConstructorOptions, maximized?: boolean, menu?: electron.Menu): electron.App {
        application = application.on('ready', () => _onAppStart(initialURL, config, maximized, menu));
        application = application.on('activate', () => {
            if(rootWindow == null) {
                _onAppStart(initialURL, config, maximized, menu);
            }
        });
        application = application.on('window-all-closed', () => {
            if(process.platform !== 'darwin') {
                application.quit();
            }
        });
        return application;
    }

}