

/**
 * A global reference to the application's constants.
 * 
 * @author rodrigo-novaes
 */
export namespace Constants {

    /**
     * The default API's port.
     */
    export const DEFAULT_API_PORT: number = 8080;

    /**
     * The default Angular app's port.
     */
    export const DEFAULT_APP_PORT: number = 9000;

    /**
     * The object that defines the development environment.
     */
    export const ENVIRONMENT_DEV: string = 'dev';

    /**
     * The object that defines the production environment.
     */
    export const ENVIRONMENT_PROD: string = 'prod';

    /**
     * The default search parameters for each query.
     */
    export const DEFAULT_QUERY_PARAMS: {sort: string, size: number, page: number} = {
        sort: 'id,ASC',
        size: 20,
        page: 0
    }

}