/**
 * A simple tree data structure in JS.
 *
 */
export class TreeNode {
    /**
     * Constructor.
     *
     * @param data
     * @param parent
     * @returns {TreeNode}
     * @constructor
     */
    constructor(data, parent) {
        this.data = data;
        this.parent = parent;
        this.children = [];
        return this;
    }

    /**
     * Add child. Returns the newly created child.
     * @param data
     * @returns {TreeNode}
     */
    addChild(data) {
        let child = new TreeNode(data, this);
        this.children.push(child);
        return child;
    }

    /**
     * Given a data object, returns the tree node containing it, if any. If not found, returns null.
     * @param data
     * @returns {TreeNode} || null
     */
    find(data) {
        if (data === this.data) {
            return this;
        }

        for (let i = 0, length = this.children.length, target = null; i < length; i++) {
            target = this.children[i].find(data);
            if (target) {
                return target;
            }
        }

        return null;
    }

    /**
     * Returns an array of all leaf nodes below this one.
     * @returns {Array}
     */
    leaves() {
        if (this.children.length === 0) {
            // this is a leaf
            return [this];
        }

        // if not a leaf, return all children's leaves recursively
        let leaves = [];
        for (let i = 0, length = this.children.length; i < length; i++) {
            leaves.push.apply(leaves, this.children[i].leaves());
        }
        return leaves;
    }

    /**
     * Returns the root node of this tree.
     * @returns {TreeNode}
     */
    root() {
        if (!this.parent) {
            return this;
        }
        return this.parent.root();
    }
}