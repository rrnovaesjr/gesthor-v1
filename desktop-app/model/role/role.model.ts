import { Entity, ConstantPersistentAttribute } from "../abstract/entity";

/**
 * A class that maps the users role.
 * 
 * @author rodrigo-novaes
 */
export class Role extends Entity<string> implements ConstantPersistentAttribute<string> {

    /**
     * A static constant reference to the role of a system administrator.
     */
    public static readonly ROLE_ADMIN: Role = new Role('ROLE_ADMIN');

    /**
     * A static constant reference to the role of a system default user.
     */
    public static readonly ROLE_USER: Role = new Role('ROLE_USER');

    /**
     * A static constant reference to 
     */
    public static readonly ROLE_VISITOR: Role = new Role('ROLE_VISITOR');

    /**
     * Creates a new role.
     * 
     * @param role A role-identifier.
     */
    public constructor(
        role: string
    ) {
        super(role);
    }

    /**
     * Return the static registered roles.
     */
    public static get values(): Role[] {
        return new Array(this.ROLE_ADMIN, this.ROLE_USER, this.ROLE_VISITOR);
    }

    /**
     * Return a default configuration for all users.
     */
    public static get default(): string[] {
        return new Array(this.ROLE_USER.persistentValue);
    }

    /**
     * Returns the role's persistent value.
     */
    get persistentValue(): string {
        return this.id;
    }

}