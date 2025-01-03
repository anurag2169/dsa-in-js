class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty : Can't perform dequeue operation";
    }
    this.queue.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty : Can't perform front operation";
    }
    return this.queue[0];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.queue.length;
  }
}

let myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(10);
myQueue.enqueue(100);

myQueue.dequeue();

myQueue.size();
myQueue.front();
myQueue.isEmpty();

console.log(myQueue);
console.log(myQueue.size());
console.log(myQueue.front());
console.log(myQueue.isEmpty());
