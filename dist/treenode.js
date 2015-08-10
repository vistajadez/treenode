(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.treenode = mod.exports;
    }
})(this, function (exports) {
    /**
     * A simple tree data structure in JS.
     *
     */
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var TreeNode = (function () {
        /**
         * Constructor.
         *
         * @param data
         * @param parent
         * @returns {TreeNode}
         * @constructor
         */

        function TreeNode(data, parent) {
            _classCallCheck(this, TreeNode);

            this.data = data;
            this.parent = parent;
            return this;
        }

        _createClass(TreeNode, [{
            key: 'addChild',

            /**
             * Add child. Returns the newly created child.
             * @param data
             * @returns {TreeNode}
             */
            value: function addChild(data) {
                var child = new TreeNode(data, this);
                if (!this.children) {
                    this.children = [];
                }
                this.children.push(child);
                return child;
            }
        }, {
            key: 'find',

            /**
             * Given a data object, returns the tree node containing it, if any. If not found, returns null.
             * @param data
             * @returns {TreeNode} || null
             */
            value: function find(data) {
                if (data === this.data) {
                    return this;
                }

                if (this.children) {
                    for (var i = 0, _length = this.children.length, target = null; i < _length; i++) {
                        target = this.children[i].find(data);
                        if (target) {
                            return target;
                        }
                    }
                }

                return null;
            }
        }, {
            key: 'leaves',

            /**
             * Returns an array of all leaf nodes below this one.
             * @returns {Array}
             */
            value: function leaves() {
                if (!this.children || this.children.length === 0) {
                    // this is a leaf
                    return [this];
                }

                // if not a leaf, return all children's leaves recursively
                var leaves = [];
                if (this.children) {
                    for (var i = 0, _length2 = this.children.length; i < _length2; i++) {
                        leaves.push.apply(leaves, this.children[i].leaves());
                    }
                }
                return leaves;
            }
        }, {
            key: 'root',

            /**
             * Returns the root node of this tree.
             * @returns {TreeNode}
             */
            value: function root() {
                if (!this.parent) {
                    return this;
                }
                return this.parent.root();
            }
        }, {
            key: 'forEach',

            /**
             * Pass this node as a parameter to the given callback function. Iteratively pass each child as well.
             * Returns the current node afterwards.
             *
             * @param callback A function which will take each node as a parameter.
             * @returns {TreeNode}
             */
            value: function forEach(callback) {
                if (typeof callback !== 'function') {
                    throw new TypeError('forEach() callback must be a function');
                }

                // run this node through function
                callback(this);

                // do the same for all children
                if (this.children) {
                    for (var i = 0, _length3 = this.children.length; i < _length3; i++) {
                        this.children[i].forEach(callback);
                    }
                }

                return this;
            }
        }, {
            key: 'numChildren',

            /**
             * Returns the number of direct descendants of this node.
             * @returns {Number}
             */
            value: function numChildren() {
                if (!this.children) {
                    return 0;
                }
                return this.children.length;
            }
        }]);

        return TreeNode;
    })();

    exports.TreeNode = TreeNode;
});