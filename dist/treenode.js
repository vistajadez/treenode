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
//# sourceMappingURL=data:application/json;base64,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Q0FBQyxHQUFHLFFBQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM1RCw0QkFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ3RDO2lCQUNKOztBQUVELHVCQUFPLElBQUksQ0FBQzthQUNmOzs7Ozs7OzttQkFNVSx1QkFBRztBQUNWLG9CQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNoQiwyQkFBTyxDQUFDLENBQUM7aUJBQ1o7QUFDRCx1QkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUMvQjs7O2VBcEhRLFFBQVE7OztZQUFSLFFBQVEsR0FBUixRQUFRIiwiZmlsZSI6InRyZWVub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIHNpbXBsZSB0cmVlIGRhdGEgc3RydWN0dXJlIGluIEpTLlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFRyZWVOb2RlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIHBhcmVudFxuICAgICAqIEByZXR1cm5zIHtUcmVlTm9kZX1cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBjaGlsZC4gUmV0dXJucyB0aGUgbmV3bHkgY3JlYXRlZCBjaGlsZC5cbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtUcmVlTm9kZX1cbiAgICAgKi9cbiAgICBhZGRDaGlsZChkYXRhKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IG5ldyBUcmVlTm9kZShkYXRhLCB0aGlzKTtcbiAgICAgICAgaWYgKCF0aGlzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgZGF0YSBvYmplY3QsIHJldHVybnMgdGhlIHRyZWUgbm9kZSBjb250YWluaW5nIGl0LCBpZiBhbnkuIElmIG5vdCBmb3VuZCwgcmV0dXJucyBudWxsLlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMge1RyZWVOb2RlfSB8fCBudWxsXG4gICAgICovXG4gICAgZmluZChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhID09PSB0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSB0aGlzLmNoaWxkcmVuLmxlbmd0aCwgdGFyZ2V0ID0gbnVsbDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5jaGlsZHJlbltpXS5maW5kKGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGFsbCBsZWFmIG5vZGVzIGJlbG93IHRoaXMgb25lLlxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBsZWF2ZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGlsZHJlbiB8fCB0aGlzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gdGhpcyBpcyBhIGxlYWZcbiAgICAgICAgICAgIHJldHVybiBbdGhpc107XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBub3QgYSBsZWFmLCByZXR1cm4gYWxsIGNoaWxkcmVuJ3MgbGVhdmVzIHJlY3Vyc2l2ZWx5XG4gICAgICAgIGxldCBsZWF2ZXMgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGVhdmVzLnB1c2guYXBwbHkobGVhdmVzLCB0aGlzLmNoaWxkcmVuW2ldLmxlYXZlcygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVhdmVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHJvb3Qgbm9kZSBvZiB0aGlzIHRyZWUuXG4gICAgICogQHJldHVybnMge1RyZWVOb2RlfVxuICAgICAqL1xuICAgIHJvb3QoKSB7XG4gICAgICAgIGlmICghdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5yb290KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFzcyB0aGlzIG5vZGUgYXMgYSBwYXJhbWV0ZXIgdG8gdGhlIGdpdmVuIGNhbGxiYWNrIGZ1bmN0aW9uLiBJdGVyYXRpdmVseSBwYXNzIGVhY2ggY2hpbGQgYXMgd2VsbC5cbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IG5vZGUgYWZ0ZXJ3YXJkcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgdGFrZSBlYWNoIG5vZGUgYXMgYSBwYXJhbWV0ZXIuXG4gICAgICogQHJldHVybnMge1RyZWVOb2RlfVxuICAgICAqL1xuICAgIGZvckVhY2goY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZm9yRWFjaCgpIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcnVuIHRoaXMgbm9kZSB0aHJvdWdoIGZ1bmN0aW9uXG4gICAgICAgIGNhbGxiYWNrKHRoaXMpO1xuXG4gICAgICAgIC8vIGRvIHRoZSBzYW1lIGZvciBhbGwgY2hpbGRyZW5cbiAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBkaXJlY3QgZGVzY2VuZGFudHMgb2YgdGhpcyBub2RlLlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbnVtQ2hpbGRyZW4oKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=