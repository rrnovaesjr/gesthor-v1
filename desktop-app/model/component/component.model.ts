import { YesNoIndicator } from "../enum/yn.enum";

/**
 * A component model to be consumed by the front-end application.
 * 
 * @author rodrigo-novaes
 */
export class ComponentModel {

    /**
     * Creates a new Component.
     * 
     * @param id The component's unique id.
     * @param label The component's label.
     * @param route The component's Angular route.
     * @param parentId The component's parent id.
     * @param leaf Wether the component is a page ('S') or not ('N').
     */
    public constructor(
        public id?: number,
        public label?: string,
        public route?: string,
        public parentId?: number,
        public leaf?: YesNoIndicator,
        public children?: ComponentModel[]
    ) {
        this.children = this.children ? this.children : [];
    }
}