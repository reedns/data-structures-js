var expect = require('chai').expect
var Node = require('../lib/node.js')
var linkedList = require('../lib/linkedList.js')

describe('linkedList', function() {
  it('inserts a node at the head of the list', function() {
    var list = new linkedList();
    list.insert('A');
    expect(list.head.val).to.equal('A');
  });

  it('links the nodes on insert if there is more than one node', function() {
    var list = new linkedList
    list.insert('A');
    list.insert('B');
    expect(list.head.prev.val).to.equal('A');
    expect(list.head.prev.next.val).to.equal('B');
  });

  it('has a size method that returns the size of the list', function() {
    var list = new linkedList
    list.insert('A');
    list.insert('B');
    expect(list.size).to.equal(2);
  });

  it('has a search function that returns the node with searched value', function() {
    var list = new linkedList;
    list.insert('A');
    list.insert('B');
    expect(list.search('B')).to.equal(list.head);
  });

  it('has a search function that returns null if searched value not found', function() {
    var list = new linkedList;
    list.insert('A');
    expect(list.search('Z')).to.equal(null)
  });

  it('has a to string method that returns the values of all the nodes in a string', function() {
    var list = new linkedList;
    list.insert('A');
    list.insert('B');
    expect(list.toS()).to.equal('B, A');
  });

  it('has remove function that removes the node with the inputted value', function() {
    var list = new linkedList;
    list.insert('A');
    list.insert('B');
    list.remove('A');
    expect(list.toS()).to.equal('B')
  });
});
