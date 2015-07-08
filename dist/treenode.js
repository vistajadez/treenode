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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUtbm9kZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUlhLFFBQVE7Ozs7Ozs7Ozs7QUFTTixhQVRGLFFBQVEsQ0FTTCxJQUFJLEVBQUUsTUFBTSxFQUFFOzhCQVRqQixRQUFROztBQVViLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLFlBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ25CLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O2lCQWRRLFFBQVE7Ozs7Ozs7O2VBcUJULGtCQUFDLElBQUksRUFBRTtBQUNYLGdCQUFJLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDckMsZ0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFCLG1CQUFPLEtBQUssQ0FBQztTQUNoQjs7Ozs7Ozs7O2VBT0csY0FBQyxJQUFJLEVBQUU7QUFDUCxnQkFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtBQUNwQix1QkFBTyxJQUFJLENBQUM7YUFDZjs7QUFFRCxpQkFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLE9BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMzRSxzQkFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JDLG9CQUFJLE1BQU0sRUFBRTtBQUNSLDJCQUFPLE1BQU0sQ0FBQztpQkFDakI7YUFDSjs7QUFFRCxtQkFBTyxJQUFJLENBQUM7U0FDZjs7Ozs7Ozs7ZUFNSyxrQkFBRztBQUNMLGdCQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTs7QUFFNUIsdUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQjs7O0FBR0QsZ0JBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNoQixpQkFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxRQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUQsc0JBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7YUFDeEQ7QUFDRCxtQkFBTyxNQUFNLENBQUM7U0FDakI7Ozs7Ozs7O2VBTUcsZ0JBQUc7QUFDSCxnQkFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDZCx1QkFBTyxJQUFJLENBQUM7YUFDZjtBQUNELG1CQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDN0I7OztXQTFFUSxRQUFROzs7UUFBUixRQUFRLEdBQVIsUUFBUSIsImZpbGUiOiJ0cmVlbm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBzaW1wbGUgdHJlZSBkYXRhIHN0cnVjdHVyZSBpbiBKUy5cbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmVlTm9kZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBwYXJlbnRcbiAgICAgKiBAcmV0dXJucyB7VHJlZU5vZGV9XG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZGF0YSwgcGFyZW50KSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBjaGlsZC4gUmV0dXJucyB0aGUgbmV3bHkgY3JlYXRlZCBjaGlsZC5cbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtUcmVlTm9kZX1cbiAgICAgKi9cbiAgICBhZGRDaGlsZChkYXRhKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IG5ldyBUcmVlTm9kZShkYXRhLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgZGF0YSBvYmplY3QsIHJldHVybnMgdGhlIHRyZWUgbm9kZSBjb250YWluaW5nIGl0LCBpZiBhbnkuIElmIG5vdCBmb3VuZCwgcmV0dXJucyBudWxsLlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMge1RyZWVOb2RlfSB8fCBudWxsXG4gICAgICovXG4gICAgZmluZChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhID09PSB0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoLCB0YXJnZXQgPSBudWxsOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuY2hpbGRyZW5baV0uZmluZChkYXRhKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBhbGwgbGVhZiBub2RlcyBiZWxvdyB0aGlzIG9uZS5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgbGVhdmVzKCkge1xuICAgICAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgYSBsZWFmXG4gICAgICAgICAgICByZXR1cm4gW3RoaXNdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbm90IGEgbGVhZiwgcmV0dXJuIGFsbCBjaGlsZHJlbidzIGxlYXZlcyByZWN1cnNpdmVseVxuICAgICAgICBsZXQgbGVhdmVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZWF2ZXMucHVzaC5hcHBseShsZWF2ZXMsIHRoaXMuY2hpbGRyZW5baV0ubGVhdmVzKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWF2ZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcm9vdCBub2RlIG9mIHRoaXMgdHJlZS5cbiAgICAgKiBAcmV0dXJucyB7VHJlZU5vZGV9XG4gICAgICovXG4gICAgcm9vdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LnJvb3QoKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9