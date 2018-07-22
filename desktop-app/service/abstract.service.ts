import { GesthorLogger } from "./util/logger";

/**
 * An abstract service class.
 * 
 * This class contains the main methods any service should implement.
 * 
 * @author rodrigo-novaes
 */
export abstract class AbstractLoggerService {

    /**
     * An abstract logger that points to the combined.log file.
     */
    protected static readonly ABSTRACT_LOGGER: GesthorLogger = new GesthorLogger(AbstractLoggerService.name);

    /**
     * A default constructor.
     */
    public constructor() {

    }

    /**
     * Returns one or more loggers associated to the service.
     */
    public abstract getLoggers(): GesthorLogger | GesthorLogger[];

}