
/**
 * A default interface for a repository object.
 * 
 * Defines a set of functions that should be implemented for any entity.
 * 
 * @author rodrigo-novaes
 */
export interface MySQLRepository<E, PK> {

    /**
     * Creates an entity.
     * 
     * Can throw exceptions based on multiple identifiers definitions.
     * 
     * @param entity Entity to be persisted.
     */
    create(entity: E): E;

    /**
     * Updates an entity.
     * 
     * Can throw exceptions based on null identifiers.
     * 
     * @param entities Entity to be updated.
     */
    update(entity: E): E;

    /**
     * Reads an entity based on its primary key.
     * 
     * @param id A unique identifier.
     */
    findOne(id: PK): E;

    /**
     * Find all objects from this entity.
     * 
     * It's possible to insert query params to filter results as needed.
     * 
     * @param params Optional query params.
     */
    findAll(params?: any[]): E[];

    /**
     * Finds objects based on optional search parameters.
     * 
     * @param params Optional query params.
     * @param searchOptions Optional search parameters.
     */
    search(params?: any[], searchOptions?: any[]): E[];
}