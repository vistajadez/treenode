var TreeNode = require('../dist/treenode.js').TreeNode;

describe("TreeNode Class", function() {
    var tree;
    var data = [
        {
            name: 'I am ROOT'
        },
        {
            name: 'Node 1'
        },
        {
            name: 'Node 2'
        },
        {
            name: 'Node 3'
        }
    ];

    beforeEach(function() {
        tree = new TreeNode(data[0]);
    });


    it("should allow a child to be added and return as a TreeNode object", function() {
        var leaf = tree.addChild(data[1]);
        expect(leaf.data.name).toEqual(data[1].name);
    });

    it("should return its root", function() {
        expect(tree.root().data.name).toEqual(data[0].name);
        var leaf = tree.addChild(data[1]);
        expect(leaf.root().data.name).toEqual(data[0].name)
    });

    it("should find data", function() {
        tree.addChild(data[1]);
        tree.addChild(data[2]);

        expect(tree.find(data[1]).data).toEqual(data[1]);
        expect(tree.find(data[2]).data).toEqual(data[2]);
        expect(tree.find(data[3])).toBe(null);
    });

    it("should find leaves", function() {
        tree.addChild(data[1]);
        var intermediateNode = tree.addChild(data[2]);
        intermediateNode.addChild(data[3]);
        var leaves = tree.leaves();

        // we've added 3 nodes, but only two are leaves
        expect(leaves.length).toBe(2);
    });

});