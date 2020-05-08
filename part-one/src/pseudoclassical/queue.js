const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.head = 0;
  this.tail = 0;
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    let headNumber = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    this.count--;
    return headNumber;
  }
};

Queue.prototype.size = function() {
  return this.count;
};

module.exports = {
  Queue
};
