const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
    return this._root;
  }

  add(data) {
    let node = this._root;
    if (!node) this._root = new Node(data);

    while (node) {
      if (data < node.data) {
        if (!node.left) {
          node.left = new Node(data);
          return;
        }
        node = node.left;
      } else if (data > node.data) {
        if (!node.right) {
          node.right = new Node(data);
          return;
        }
        node = node.right;
      } else return;
    }
  }

  has(data) {
    let node = this._root;
    if (!node) return null;

    while (node) {
      if (data < node.data) {
        node = node.left;
      } else if (data > node.data) {
        node = node.right;
      } else {
        return true;
      }
    }

    return false;
  }

  find(data) {
    let node = this._root;
    if (!node) return null;

    while (node) {
      if (data < node.data) {
        node = node.left;
      } else if (data > node.data) {
        node = node.right;
      } else {
        return node;
      }
    }

    return null;
  }

  remove(data) {
    this._root = _remove(this._root, data);

    function _remove(node, data) {
      if (!node) return null;
      if (data < node.data) {
        node.left = _remove(node.left, data);
        return node;
      }
      if (data > node.data) {
        node.right = _remove(node.right, data);
        return node;
      }
      if (data === node.data) {
        if (!node.left && !node.right) return null;
        if (!node.left || !node.right) {
          node = !node.left ? node.right : node.left;
          return node;
        }
        let maximumInLeftSubtree = node.left;
        while (maximumInLeftSubtree.right) {
          maximumInLeftSubtree = maximumInLeftSubtree.right;
        }
        node.data = maximumInLeftSubtree.data;
        node.left = _remove(node.left, maximumInLeftSubtree.data);
        return node;
      }
    }
  }

  min() {
    let node = this._root;
    if (!node) return null;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    let node = this._root;
    if (!node) return null;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
