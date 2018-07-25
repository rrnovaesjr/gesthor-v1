import { MySQLRepository } from "./mysql.repository";
import { Role } from "../model/role/role.model";

/**
 * A repository for user roles.
 * 
 * @author rodrigo-novaes
 */
class RoleRepository extends MySQLRepository<Role, string> {

    /**
     * A constant static reference to the table's name.
     */
    private static readonly TABLE_NAME = `role`;

    /**
     * Creates a new Role Repository.
     */
    public constructor() {
        super(RoleRepository.TABLE_NAME);
    }
}

/**
 * A singleton reference to the Role Repository.
 */
export const roleRepository: RoleRepository = new RoleRepository();