var globals = {};

// Stash old global.
if ("treenode" in global) globals.treenode = global.treenode;

module.exports = require("./dist/treenode");

// Restore old global.
if ("treenode" in globals) global.treenode = globals.treenode; else delete global.treenode;