var globals = {};

// Stash old global.
if ("tree-node" in global) globals.tree-node = global.tree-node;

module.exports = require("./dist/tree-node.js");

// Restore old global.
if ("tree-node" in globals) global.tree-node = globals.tree-node; else delete global.tree-node;