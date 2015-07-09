(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
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
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
            key: "addChild",

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
            key: "find",

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
            key: "leaves",

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
            key: "root",

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
        }]);

        return TreeNode;
    })();

    exports.TreeNode = TreeNode;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWVub2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUlhLFFBQVE7Ozs7Ozs7Ozs7QUFTTixpQkFURixRQUFRLENBU0wsSUFBSSxFQUFFLE1BQU0sRUFBRTtrQ0FUakIsUUFBUTs7QUFVYixnQkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGdCQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNuQixtQkFBTyxJQUFJLENBQUM7U0FDZjs7cUJBZFEsUUFBUTs7Ozs7Ozs7bUJBcUJULGtCQUFDLElBQUksRUFBRTtBQUNYLG9CQUFJLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDckMsb0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFCLHVCQUFPLEtBQUssQ0FBQzthQUNoQjs7Ozs7Ozs7O21CQU9HLGNBQUMsSUFBSSxFQUFFO0FBQ1Asb0JBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDcEIsMkJBQU8sSUFBSSxDQUFDO2lCQUNmOztBQUVELHFCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsT0FBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzNFLDBCQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsd0JBQUksTUFBTSxFQUFFO0FBQ1IsK0JBQU8sTUFBTSxDQUFDO3FCQUNqQjtpQkFDSjs7QUFFRCx1QkFBTyxJQUFJLENBQUM7YUFDZjs7Ozs7Ozs7bUJBTUssa0JBQUc7QUFDTCxvQkFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRTVCLDJCQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2pCOzs7QUFHRCxvQkFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLHFCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLFFBQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM1RCwwQkFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztpQkFDeEQ7QUFDRCx1QkFBTyxNQUFNLENBQUM7YUFDakI7Ozs7Ozs7O21CQU1HLGdCQUFHO0FBQ0gsb0JBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2QsMkJBQU8sSUFBSSxDQUFDO2lCQUNmO0FBQ0QsdUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUM3Qjs7O2VBMUVRLFFBQVE7OztZQUFSLFFBQVEsR0FBUixRQUFRIiwiZmlsZSI6InRyZWVub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIHNpbXBsZSB0cmVlIGRhdGEgc3RydWN0dXJlIGluIEpTLlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFRyZWVOb2RlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIHBhcmVudFxuICAgICAqIEByZXR1cm5zIHtUcmVlTm9kZX1cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGNoaWxkLiBSZXR1cm5zIHRoZSBuZXdseSBjcmVhdGVkIGNoaWxkLlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMge1RyZWVOb2RlfVxuICAgICAqL1xuICAgIGFkZENoaWxkKGRhdGEpIHtcbiAgICAgICAgbGV0IGNoaWxkID0gbmV3IFRyZWVOb2RlKGRhdGEsIHRoaXMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2l2ZW4gYSBkYXRhIG9iamVjdCwgcmV0dXJucyB0aGUgdHJlZSBub2RlIGNvbnRhaW5pbmcgaXQsIGlmIGFueS4gSWYgbm90IGZvdW5kLCByZXR1cm5zIG51bGwuXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7VHJlZU5vZGV9IHx8IG51bGxcbiAgICAgKi9cbiAgICBmaW5kKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgPT09IHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gdGhpcy5jaGlsZHJlbi5sZW5ndGgsIHRhcmdldCA9IG51bGw7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5jaGlsZHJlbltpXS5maW5kKGRhdGEpO1xuICAgICAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGFsbCBsZWFmIG5vZGVzIGJlbG93IHRoaXMgb25lLlxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBsZWF2ZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gdGhpcyBpcyBhIGxlYWZcbiAgICAgICAgICAgIHJldHVybiBbdGhpc107XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBub3QgYSBsZWFmLCByZXR1cm4gYWxsIGNoaWxkcmVuJ3MgbGVhdmVzIHJlY3Vyc2l2ZWx5XG4gICAgICAgIGxldCBsZWF2ZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxlYXZlcy5wdXNoLmFwcGx5KGxlYXZlcywgdGhpcy5jaGlsZHJlbltpXS5sZWF2ZXMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlYXZlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByb290IG5vZGUgb2YgdGhpcyB0cmVlLlxuICAgICAqIEByZXR1cm5zIHtUcmVlTm9kZX1cbiAgICAgKi9cbiAgICByb290KCkge1xuICAgICAgICBpZiAoIXRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQucm9vdCgpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=