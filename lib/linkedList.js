var Node = require('../lib/node.js')

function linkedList() {
  this.head = null;
  this.size = 0;
}

linkedList.prototype.insert = function(value) {
  if(this.head == null) {
    this.head = new Node(value, null, null);
    this.size++;
  }
  else {
    var oldHead = this.head;
    this.head = new Node(value, null, oldHead);
    oldHead.next = this.head;
    this.size++;
  }
};

linkedList.prototype.size = function() {
  return this.size
};

linkedList.prototype.search = function(value) {
  var currentNode = this.head;
  while(currentNode && currentNode.val != value) {
    currentNode = currentNode.prev;
  }

  if (currentNode == null) {
    return null;
  }
  else {
    return currentNode;
  }
};

linkedList.prototype.toS = function() {
  var currentNode = this.head;
  var values = [];
  while(currentNode) {
    values.push(currentNode.val);
    currentNode = currentNode.prev;
  }
  return values.join(', ');
};

linkedList.prototype.remove = function(value) {
  var currentNode = this.head;
  while(currentNode && currentNode.val != value) {
    currentNode = currentNode.prev
  }
  if(currentNode.next && currentNode.prev) {
    currentNode.next.prev = currentNode.prev
    currentNode.prev.next = currentNode.next
  }
  else if(currentNode.prev == null && currentNode.next) {
    currentNode.next.prev = null
  }
  else if(currentNode.next == null && currentNode.prev) {
    currentNode.prev.next = currentNode.next
  }
  else {
    return null
  }
  return currentNode
};



module.exports = linkedList;
