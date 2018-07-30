import { YesNoIndicator } from "../enum/yn.enum";

/**
 * An abstract class that represents a Tree.
 * 
 * @author rodrigo-novaes
 * @param IdType A Node id-type.
 */
export abstract class TreeNode<IdType> {

    /**
     * Creates a new Tree.
     * 
     * @param leaf Wether the node is a leaf or not.
     * @param children A set of children of the current node.
     */
    protected constructor(
        public id?: IdType,
        public parentId?: IdType,
        public leaf?: YesNoIndicator,
        public children?: TreeNode<IdType>[]
    ) {

    }

    /**
     * Receives a pure array of `TreeNode`s and return it as a tree format.
     * 
     * The elements in the returned array are the roots of the trees. When 
     * the address `children` is accessed, the immediate children of the
     * roots are returned.
     * 
     * @param array An array of `TreeNode`s.
     */
    public static fromArray<IdType>(array: TreeNode<IdType>[]): TreeNode<IdType>[] {
        const graph: Map<IdType, TreeNode<IdType>[]> = new Map();
        let result: TreeNode<IdType>[] = [];
        for (let node of array) {
            if (!node.parentId) {
                result.push(node);
            } else {
                if (!graph.has(node.parentId)) {
                    graph.set(node.parentId, []);
                }
                graph.get(node.parentId).push(node);
            }
        }
        for (let preReslt of result) {
            preReslt = TreeNode._explore<IdType>(preReslt, graph);
        }
        return result;
    }

    /**
     * Explores the children of `root` according to the relationship established in
     * `graph`.
     * 
     * @param root The current node.
     * @param graph A graph that establishes the relations from `root`.
     */
    private static _explore<IdType>(root: TreeNode<IdType>, graph: Map<IdType, TreeNode<IdType>[]>): TreeNode<IdType> {
        root.children = [];
        if(graph.has(root.id)) {
            for(let adj of graph.get(root.id)) {
                adj = this._explore(adj, graph);
                root.children.push(adj);
            }    
        }
        return root;
    }

}