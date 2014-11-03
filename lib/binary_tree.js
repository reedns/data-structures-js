function treeNode(val, left, right) {
  this.val = val
  this.left = null
  this.right = null
}

function binaryTree(val) {
  this.root = null
  this.size = 0
}

binaryTree.prototype = {
  insert: function(val) {
    if(this.root === null) {
      this.root = new treeNode(val);
      this.size++
    }
    else {
      currentNode = this.root
      while(currentNode) {
        if(currentNode.val < val && currentNode.left === null) {
          currentNode.left = new treeNode(val);
          this.size++;
          break;
        }
        else if(currentNode.val < val) {
          currentNode = currentNode.left;
        }
        else if(currentNode > val && currentNode.right === null) {
          currentNode.right = new treeNode(val);
          this.size++;
          break;
        }
        else {
          currentNode = currentNode.right;
        }
      }
    }
  },
  contains: function(val, node) {
    var node = node
    if(node.left === null && node.right === null) {
      return false;
    }
    else if(node.val === val) {
      return true;
    }
    else if(node.val < val && node.left) {
      this.contains(val, node.left);
    }
    else if(node.val > val && node.right) {
      this.contains(val, node.right);
    }
  },
  depth: function(node) {
    var currentNode = node
    if(currentNode == null) {
      return 0
    }
    var leftDepth = this.depth(currentNode.left) + 1;
    var rightDepth = this.depth(currentNode.right) + 1;

    if(leftDepth > rightDepth) {
      return leftDepth;
    }
    else {
      return rightDepth;
    }
  },
  balance: function() {
    if(this.size <= 1) {
      return 0
    }
    var balance = this.depth(this.root.left) - this.depth(this.root.right)
    return balance
  }
};

module.exports = binaryTree;
