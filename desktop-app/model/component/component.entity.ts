import { Entity } from "../abstract/entity";

/**
 * An entity representation of a component.
 * 
 * A component is a view of the application. Therefore, it assumes a
 * tree-navigation model.
 * 
 * @author rodrigo-novaes
 */
export class _Component extends Entity<number> {

    /**
     * Creates a new Component.
     * 
     * @param id The component's unique id.
     * @param label The component's label.
     * @param route The component's Angular route.
     * @param parent_id The component's parent id.
     * @param leaf Wether the component is a page ('Y') or not ('N').
     */
    public constructor(
        public id: number,
        public label: string,
        public route?: string,
        public parent_id?: number,
        public leaf?: 'Y' | 'N'
    ) {
        super(id);
    }
}