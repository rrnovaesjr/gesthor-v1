import { SQLMapper } from "./mapper.interface";
import { _ComponentModel } from "../../model/component/component.entity";
import { ComponentModel } from "../../model/component/component.model";
import { OkPacket } from "mysql";
import { YesNoIndicator } from "../../model/enum/yn.enum";

/**
 * A singleton mapper from a component entity to its model.
 * 
 * @author rodrigo-novaes
 */
class ComponentMapper implements SQLMapper<ComponentModel, _ComponentModel> {

    /**
     * Converts `model` into its database model.
     * 
     * @param model Model to be converted in SQL.
     */
    public entityToSQL(model: ComponentModel): _ComponentModel {
        return new _ComponentModel(model.id, model.label, model.leaf.persistentValue, model.active.persistentValue, 
            model.order, model.route, model.parentId);
    }

    /**
     * Converts `entity` into a model.
     * 
     * @param entity OkPacket to be converted into model.
     */
    public sQLToEntity(entity: any): ComponentModel {
        const metamodelEntity: _ComponentModel = Object.assign({}, entity);
        return new ComponentModel(metamodelEntity.id, metamodelEntity.label, YesNoIndicator.getByCode(metamodelEntity.leaf),
            YesNoIndicator.getByCode(metamodelEntity.active), metamodelEntity.order, metamodelEntity.route, 
            metamodelEntity.parent_id);
    }

    /**
     * Converts `entities` into their model.
     * 
     * @param entities List of OkPacket[].
     */
    public manySQLToEntities(entities: OkPacket[]): ComponentModel[] {
        let result: ComponentModel[] = [];
        for(let entity of entities) {
            result.push(this.sQLToEntity(entity));
        }
        return result;
    }
}

export const componentMapper = new ComponentMapper();