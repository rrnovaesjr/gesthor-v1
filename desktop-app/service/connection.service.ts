import { Connection, Pool, createPool } from "mysql2";
import { environment } from "../environments";

/**
 * A service to control the connections pool to the database.
 * 
 * @author rodrigo-novaes
 */
class ConnectionService {

    /**
     * A constant reference to the pool of connections to the database.
     * 
     * As the documentation says, each connection is lazily loaded by the server.
     */
    private readonly pool: Pool = createPool(environment.databaseConfig);

    /**
     * Returns the pool to execute a shortcut for getConnection() -> connection.query() ->
     * connection.release(). This basically returns a connection for each access to the database.
     */
    get connection(): Pool {
        return this.pool;
    }

}

/**
 * A singleton reference to the connections service.
 */
export const connectionService: ConnectionService = new ConnectionService();