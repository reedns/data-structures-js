var expect = require('chai').expect
var binaryTree = require('../lib/binary_tree.js')

describe('binaryTree', function() {
  it('inserts the first node at the root', function() {
    var tree = new binaryTree();
    tree.insert('A');
    expect(tree.root.val).to.equal('A');
  });

  it('inserts a new node on the left subtree if value is greater than root valu', function() {
    var tree = new binaryTree();
    tree.insert('A');
    tree.insert('B');
    expect(tree.root.left.val).to.equal('B');
  });

  it('inserts a new node on the right subtree if the value is less than root value', function() {
    var tree = new binaryTree();
    tree.insert('B');
    tree.insert('A');
    expect(tree.root.right.val).to.equal('A');
  });

  it('returns true if tree contains given value', function() {
    var tree = new binaryTree();
    tree.insert('B');
    tree.insert('A');
    expect(tree.contains('B', tree.root).to.be(true));
  });

  it('returns 0 if the tree is empty', function() {
    var tree = new binaryTree();
    expect(tree.size).to.equal(0);
  })

  it('returns the size of the tree', function() {
    var tree = new binaryTree();
    tree.insert('B');
    tree.insert('A');
    expect(tree.size).to.equal(2);
  })

  it('returns the depth of the tree', function() {
    var tree = new binaryTree();
    tree.insert('B');
    tree.insert('A');
    tree.insert('C');
    expect(tree.depth(tree.root)).to.equal(2)
  });

  it('returns the difference in depth between left and right subtrees', function() {
    var tree = new binaryTree();
    tree.insert(3);
    tree.insert(1);
    tree.insert(4);
    tree.insert(0);
    expect(tree.balance()).to.equal(1)
  });
});
