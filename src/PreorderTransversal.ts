import * as React from "react";

// depth first: stack
// - pre-order
// - in-order
// - post-order

// breadth first: queue
// - level-order

// Preorder transversal
// 1. visit the node
// 2. transverse left
// 3. transverse right

export default () => {
  return <div>This is the preorder transversal.</div>;
};

// Binary search tree in javascript

class Node {
  data: any;
  left: Node;
  right: Node;

  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  root: Node;

  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;

    if (node == null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node: Node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
    }
  }
}
