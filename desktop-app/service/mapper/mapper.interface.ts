import { OkPacket } from 'mysql';

/**
 * An interface that defines the most basic mapping models from a metamodel SQL object
 * to an entity-based object.
 * 
 * @author rodrigo-novaes.
 */
export interface SQLMapper<E, _E> {

    /**
     * Returns an entity from a MySQL-column defined object.
     * 
     * @param source Source MySQL-column defined object.
     */
    sQLToEntity(source: OkPacket): E;

    /**
     * Returns a MySQL-column defined object from an entity.
     * 
     * @param source Entity object.
     */
    entityToSQL(source: E): _E;

    /**
     * Maps many MySQL-column defined objects to entities.
     * 
     * @param source Array of MySQL-column defined objects.
     */
    manySQLToEntities(source: OkPacket[]): E[];

}