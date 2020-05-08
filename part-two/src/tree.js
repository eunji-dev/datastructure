const Tree = function(value) {
  const newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  extend(newTree, treeMethods);
  return newTree;
};

const treeMethods = {};

treeMethods.addChild = function(value) {
  let Node = new Tree(value);
  Node.value = value;
  this.children.push(Node);
};

treeMethods.contains = function(target) {
  let isFalse = false;

  let checkFunc = function(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].value === target) isFalse = true;
      else {
        checkFunc(array[i].children, target);
      }
    }
    return isFalse;
  };
  checkFunc(this.children, target);
  return isFalse;
};

function extend(to, from) {
  for (let prop in from) {
    to[prop] = from[prop];
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = Tree;
