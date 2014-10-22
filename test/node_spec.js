var expect = require('chai').expect;
var Node = require('../lib/node.js');

describe('Node', function() {
  it('has a value', function() {
    var node = new Node('cat');
    expect(node.val).to.equal('cat');
  });
});
