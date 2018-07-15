
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
 * An internationalizable entity can be identified by its primary key, also some
 * fields can be determinated by its language key. This language key must be a string
 * with the i18n language's key.
 * 
 * @param PK A serializable primary key's type.
 * @author rodrigo-novaes
 */
export abstract class I18nEntity<PK> extends Entity<PK> {

    /**
     * The 118n language's key.
     */
    public lang: string;

    /**
     * Default constructor which assigns an entity's unique identifier with its i18n
     * language's key.
     * 
     * @param id A serializable primary key's instance.
     * @param lang A string with the i18n language's key.
     */
    public constructor(id: PK, lang: string) {
        super(id);
        this.lang = lang;
    }

}