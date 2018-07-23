import { SQLMapper } from "./mapper.interface";
import { _Component } from "../../model/component/component.entity";
import { Component } from "../../model/component/component.model";
import { OkPacket } from "mysql";
import { YesNoIndicator } from "../../model/enum/yn.enum";

/**
 * A singleton mapper from a component entity to its model.
 * 
 * @author rodrigo-novaes
 */
class ComponentMapper implements SQLMapper<Component, _Component> {

    /**
     * Converts `model` into its database model.
     * 
     * @param model Model to be converted in SQL.
     */
    public entityToSQL(model: Component): _Component {
        return new _Component(model.id, model.label, model.route, model.parentId, model.leaf.code);
    }

    /**
     * Converts `entity` into a model.
     * 
     * @param entity OkPacket to be converted into model.
     */
    public sQLToEntity(entity: any): Component {
        const metamodelEntity: _Component = Object.assign({}, entity);
        return new Component(metamodelEntity.id, metamodelEntity.label, metamodelEntity.route, metamodelEntity.parent_id, YesNoIndicator.getByCode(metamodelEntity.leaf));
    }

    /**
     * Converts `entities` into their model.
     * 
     * @param entities List of OkPacket[].
     */
    public manySQLToEntities(entities: OkPacket[]): Component[] {
        let result: Component[] = [];
        for(let entity of entities) {
            result.push(this.sQLToEntity(entity));
        }
        return result;
    }
}

export const componentMapper = new ComponentMapper();