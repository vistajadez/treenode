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
            this.children = [];
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

                for (var i = 0, _length = this.children.length, target = null; i < _length; i++) {
                    target = this.children[i].find(data);
                    if (target) {
                        return target;
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
                if (this.children.length === 0) {
                    // this is a leaf
                    return [this];
                }

                // if not a leaf, return all children's leaves recursively
                var leaves = [];
                for (var i = 0, _length2 = this.children.length; i < _length2; i++) {
                    leaves.push.apply(leaves, this.children[i].leaves());
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
                for (var i = 0, _length3 = this.children.length; i < _length3; i++) {
                    callback(this.children[i]);
                }

                return this;
            }
        }]);

        return TreeNode;
    })();

    exports.TreeNode = TreeNode;
});
//# sourceMappingURL=data:application/json;base64,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ZW5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgc2ltcGxlIHRyZWUgZGF0YSBzdHJ1Y3R1cmUgaW4gSlMuXG4gKlxuICovXG5leHBvcnQgY2xhc3MgVHJlZU5vZGUge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gcGFyZW50XG4gICAgICogQHJldHVybnMge1RyZWVOb2RlfVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRhdGEsIHBhcmVudCkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgY2hpbGQuIFJldHVybnMgdGhlIG5ld2x5IGNyZWF0ZWQgY2hpbGQuXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7VHJlZU5vZGV9XG4gICAgICovXG4gICAgYWRkQ2hpbGQoZGF0YSkge1xuICAgICAgICBsZXQgY2hpbGQgPSBuZXcgVHJlZU5vZGUoZGF0YSwgdGhpcyk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIGRhdGEgb2JqZWN0LCByZXR1cm5zIHRoZSB0cmVlIG5vZGUgY29udGFpbmluZyBpdCwgaWYgYW55LiBJZiBub3QgZm91bmQsIHJldHVybnMgbnVsbC5cbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtUcmVlTm9kZX0gfHwgbnVsbFxuICAgICAqL1xuICAgIGZpbmQoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YSA9PT0gdGhpcy5kYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCwgdGFyZ2V0ID0gbnVsbDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzLmNoaWxkcmVuW2ldLmZpbmQoZGF0YSk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgYWxsIGxlYWYgbm9kZXMgYmVsb3cgdGhpcyBvbmUuXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGxlYXZlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyB0aGlzIGlzIGEgbGVhZlxuICAgICAgICAgICAgcmV0dXJuIFt0aGlzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIG5vdCBhIGxlYWYsIHJldHVybiBhbGwgY2hpbGRyZW4ncyBsZWF2ZXMgcmVjdXJzaXZlbHlcbiAgICAgICAgbGV0IGxlYXZlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGVhdmVzLnB1c2guYXBwbHkobGVhdmVzLCB0aGlzLmNoaWxkcmVuW2ldLmxlYXZlcygpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVhdmVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHJvb3Qgbm9kZSBvZiB0aGlzIHRyZWUuXG4gICAgICogQHJldHVybnMge1RyZWVOb2RlfVxuICAgICAqL1xuICAgIHJvb3QoKSB7XG4gICAgICAgIGlmICghdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5yb290KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFzcyB0aGlzIG5vZGUgYXMgYSBwYXJhbWV0ZXIgdG8gdGhlIGdpdmVuIGNhbGxiYWNrIGZ1bmN0aW9uLiBJdGVyYXRpdmVseSBwYXNzIGVhY2ggY2hpbGQgYXMgd2VsbC5cbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IG5vZGUgYWZ0ZXJ3YXJkcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgdGFrZSBlYWNoIG5vZGUgYXMgYSBwYXJhbWV0ZXIuXG4gICAgICogQHJldHVybnMge1RyZWVOb2RlfVxuICAgICAqL1xuICAgIGZvckVhY2goY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZm9yRWFjaCgpIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcnVuIHRoaXMgbm9kZSB0aHJvdWdoIGZ1bmN0aW9uXG4gICAgICAgIGNhbGxiYWNrKHRoaXMpO1xuXG4gICAgICAgIC8vIGRvIHRoZSBzYW1lIGZvciBhbGwgY2hpbGRyZW5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMuY2hpbGRyZW5baV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==