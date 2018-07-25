import { MySQLRoleAuditedRepository } from "./mysql.repository";
import { _ComponentModel } from "../model/component/component.entity";

/**
 * A component repository. Returns menu information for all interested users;
 * 
 * @author rodrigo-novaes
 */
class ComponentRepository extends MySQLRoleAuditedRepository<_ComponentModel, number> {

    /**
     * A constant static reference to the table's name.
     */
    public static readonly TABLE_NAME: string = `component`;

    /**
     * Creates a new instance of the component repository.
     */
    public constructor() {
        super(ComponentRepository.TABLE_NAME, {
            joinRoleColumnName: `role`,
            joinRoleTableName: `component_user_role`
        });
    }

}

export const componentRepository: ComponentRepository = new ComponentRepository();