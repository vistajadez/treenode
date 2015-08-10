var TreeNode = require('../dist/treenode').TreeNode;

describe("TreeNode Class", function() {
    var tree;
    var data = [
        {
            name: 'I am ROOT',
            status: 'initial'
        },
        {
            name: 'Node 1',
            status: 'initial'
        },
        {
            name: 'Node 2',
            status: 'initial'
        },
        {
            name: 'Node 3',
            status: 'initial'
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

    it("should execute forEach() callback on all child nodes", function() {
        var intermediateNode = tree.addChild(data[1]);
        var childNode = intermediateNode.addChild(data[2]);
        var grandchildNode = childNode.addChild(data[3]);

        intermediateNode.forEach(function(node) {
           node.data.status = 'updated';
        });

        expect(tree.root().data.status).toBe('initial');
        expect(intermediateNode.data.status).toBe('updated');
        expect(childNode.data.status).toBe('updated');
        expect(grandchildNode.data.status).toBe('updated');
    });

    it("should return the number of children", function() {
        expect(tree.numChildren()).toBe(0);
        tree.addChild(data[1]);
        expect(tree.numChildren()).toBe(1);
        var intermediateNode = tree.addChild(data[2]);
        expect(tree.numChildren()).toBe(2);
        intermediateNode.addChild(data[3]);
        expect(tree.numChildren()).toBe(2);
        expect(intermediateNode.numChildren()).toBe(1);
    });

});