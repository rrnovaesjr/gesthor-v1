
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
     * String that defines the user's default role in the application.
     */
    export const ROLE_USER: string = 'ROLE_USER';

    /**
     * String that defines the user's admin role in the application.
     */
    export const ROLE_ADMIN: string = 'ROLE_ADMIN';

    /**
     * The default search parameters for each query.
     */
    export const DEFAULT_QUERY_PARAMS: {sort: string, size: number, page: number} = {
        sort: 'id,ASC',
        size: 20,
        page: 0
    }

    /**
     * Checks if `object` is `null` or `undefined`. If it is, returns `valueIfBlank`;
     * otherwise, returns `object`.
     * 
     * @param object Object instance.
     * @param valueIfBlank Default value, if `object` is `null` or `undefined`.
     */
    export function defaultIfBlank<O>(object: O, valueIfBlank: O): O {
        if(object === null || object === undefined) {
            return valueIfBlank;
        }
        return object;
    }

}