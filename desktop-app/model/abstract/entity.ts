
/**
 * An abstract model for an entity. Every entity has one primary key, therefore
 * it can be persisted on a database system.
 * 
 * @param PK A serializable primary key's type.
 * @author rodrigo-novaes
 */
export abstract class Entity<PK> {

    /**
     * Default constructor which assigns an entity's unique identifier.
     * 
     * @param id A serializable primary key's instance.
     */
    public constructor(public id: PK) {

    }
}

/**
 * An user audited entity is an entity that's managed by an user. These entities
 * can be accessed only by its specific user.
 * 
 * @param PK A serializable primary key's type.
 * @param FK A Serializable user identifier's type.
 * @author rodrigo-novaes
 */
export abstract class UserAuditedEntity<PK, FK> extends Entity<PK> {

    /**
     * Default constructor which assigns an entity's unique identifier with
     * its owner user's identifier.
     * 
     * @param id A serializable primary key's instance. 
     * @param user_id A serialiable user identifier's instance.
     */
    public constructor(id: PK, public user_id: FK) {
        super(id);
    }
}

/**
 * An interface that encapsulates constant types.
 * 
 * This is useful when the interface or the services want to save some specific
 * value for a model, but the database has constraints assigned to the same
 * column.
 * 
 * @author rodrigo-novaes
 * @param PersistentValueType The type-value to be persisted in the database.
 */
export interface ConstantPersistentAttribute<PersistentValueType extends number | string | { param: number | string }> {

    /**
     * Returns the value to be persisted in the database.
     */
    persistentValue: PersistentValueType;

}