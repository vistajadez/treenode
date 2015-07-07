Tree Node
=========
Simple tree data structure in JS, designed specifically to organize related data in such a way that it can be consumed
by tree diagram visualizations, and so that "leaf" nodes (endpoints) can be quickly identified.

## Installation

  npm install tree-node --save

## Usage

  // Import the class
  var TreeNode = require('tree-node.min.js').TreeNode;

  // Create a tree by adding a single node, with a data object payload. This will be the root node.

  var tree = new TreeNode({id: 0, name: 'root'}); // tree is a TreeNode object: {data: {id: 0, name: 'root'}, parent: null, children: []}

  // Add children to the root. This returns the newly created child's TreeNode object.
  tree.addChild({id: 2, name: 'Node 2' });
  var intermediateNode = tree.addChild(data[2]);

  // Add child nodes to child nodes
  intermediateNode.addChild({id: 3, name: 'Node 3' });

  // Obtain the tree's leaves (end nodes), from the point of the called node
  var leaves = tree.leaves(); // returns TreeNode objects for node 1 and node 3. Node 2 is not returned since it is not a leaf.

  // Find data in a tree
  var node = tree.addChild(someObject);
  var match = tree.findNode(someObject);  // match === node

  // Find the tree root, from any node
  var root = node.root();

## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed
functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release
