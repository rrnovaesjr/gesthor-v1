import { OkPacket } from 'mysql';

/**
 * An interface that contains a JSON definition for an entity.
 * 
 * `E` must be an interface that defines each field of the MYSQL table that stores 
 * such entity's information.
 * 
 * @author rodrigo-novaes
 */
export interface Table<E> extends OkPacket {

    /**
     * The entity container.
     */
    entityContainer: E;

}
