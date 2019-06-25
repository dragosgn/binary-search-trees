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
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }

  find(data: number) {
    let current = this.root;

    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  isPresent(data: number) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data: number) {
    const removeNode = function(node: Node, data: number) {
      if (node == null) {
        return null;
      }

      if (data === node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child
        if (node.right === null) {
          return node.right;
        }
        // node has no right child
        if (node.right === null) {
          return node.left;
        }

        // node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
      } else {
        node.right = removeNode(node.right, data);
      }
    };
    this.root = removeNode(this.root, data);
  }
}

const bst = new BST();

export default class BstRender extends React.Component {
  render() {
    const randomNumbers = [
      1,
      3,
      5,
      7,
      56,
      43543,
      34,
      234,
      3,
      32423,
      5234,
      23423
    ];
    randomNumbers.map(number => bst.add(number));

    return (
      <div>
        <p>min: {bst.findMin()}</p>
        <p>max: {bst.findMax()}</p>
        <p>is present 234: {bst.isPresent(234) ? "yes" : "no"}</p>
      </div>
    );
  }
}
