
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
 * An abstract class that encapsulates constant types.
 * 
 * This is useful when the interface or the services want to save some specific
 * values for a model, but the database have constraints assigned to the very same
 * column.
 * 
 * @author rodrigo-novaes
 * @param InterfaceType The interface the constant value-set must follow.
 * @param PersistentValueType The type-value to be persisted in the database.
 */
export abstract class ConstantAttribute<InterfaceType, PersistentValueType> {

    /**
     * A public list of constant-values.
     */
    public readonly values: ConstantAttribute<InterfaceType, PersistentValueType>[];

    /**
     * Creates a new Constant Attribute set.
     * 
     * @param values 
     */
    protected constructor() {
        this.values = this.getValues();
    }

    /**
     * A call to instantiate the list of static values inside `values`.
     */
    public abstract getValues(): ConstantAttribute<InterfaceType, PersistentValueType>[];

    /**
     * Returns the value to be persisted in the database.
     */
    public abstract getPersistentValue(): PersistentValueType;

}