var myCircularQueue = function (k) {
  this.queue = [];
  this.size = k;
};

/**
 * Inserts an element into the circular queue. Return true if the operation is successful.
 */
myCircularQueue.prototype.enqueue = function (value) {
  if (this.queue.length === this.size) {
    return false;
  }
  this.queue.push(value);
  return true;
};

myCircularQueue.prototype.dequeue = function () {
  if (this.queue.length === 0) return false;
  this.queue.shift();
  return true;
};

myCircularQueue.prototype.front = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[0];
};

myCircularQueue.prototype.rear = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[this.queue.length - 1];
};

myCircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};

myCircularQueue.prototype.isFull = function () {
  return this.queue.length === this.size;
};

var obj = new myCircularQueue(3);
console.log(obj.enqueue(1));
console.log(obj.enqueue(2));
console.log(obj.enqueue(3));
console.log(obj.enqueue(4));
console.log(obj.rear());
console.log(obj.isFull());
console.log(obj.dequeue());
console.log(obj.enqueue(4));
console.log(obj.rear());
