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
        return this;
    }

    /**
     * Add child. Returns the newly created child.
     * @param data
     * @returns {TreeNode}
     */
    addChild(data) {
        let child = new TreeNode(data, this);
        if (!this.children) {
            this.children = [];
        }
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

        if (this.children) {
            for (let i = 0, length = this.children.length, target = null; i < length; i++) {
                target = this.children[i].find(data);
                if (target) {
                    return target;
                }
            }
        }

        return null;
    }

    /**
     * Returns an array of all leaf nodes below this one.
     * @returns {Array}
     */
    leaves() {
        if (!this.children || this.children.length === 0) {
            // this is a leaf
            return [this];
        }

        // if not a leaf, return all children's leaves recursively
        let leaves = [];
        if (this.children) {
            for (let i = 0, length = this.children.length; i < length; i++) {
                leaves.push.apply(leaves, this.children[i].leaves());
            }
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

    /**
     * Pass this node as a parameter to the given callback function. Iteratively pass each child as well.
     * Returns the current node afterwards.
     *
     * @param callback A function which will take each node as a parameter.
     * @returns {TreeNode}
     */
    forEach(callback) {
        if (typeof callback !== 'function') {
            throw new TypeError('forEach() callback must be a function');
        }

        // run this node through function
        callback(this);

        // do the same for all children
        if (this.children) {
            for (let i = 0, length = this.children.length; i < length; i++) {
                this.children[i].forEach(callback);
            }
        }

        return this;
    }

    /**
     * Returns the number of direct descendants of this node.
     * @returns {Number}
     */
    numChildren() {
        if (!this.children) {
            return 0;
        }
        return this.children.length;
    }
}