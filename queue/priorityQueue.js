// Lower number = higher priority
// Maintain FIFO for same-priority items

class priorityQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(element, priority) {
    let newValue = { element, priority };
    let inserted = false;

    for (let i = 0; i < this.queue.length; i++) {
      if (priority < this.queue[i].priority) {
        this.queue.splice(i, 0, newValue);
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      this.queue.push(newValue);
    }
  }

  dequeue() {
    if (this.queue.length !== 0) {
      return this.queue.shift();
    }
    return null;
  }

  front() {
    if (this.queue.length !== 0) {
      return this.queue[0];
    }
    return null;
  }

  rear() {
    if (this.queue.length !== 0) {
      return this.queue[this.queue.length - 1];
    }
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  printQueue() {
    let values = [];

    for (let i = 0; i < this.queue.length; i++) {
      values.push(this.queue[i].element);
    }

    return values;
  }
}

let pq = new priorityQueue();

pq.enqueue("task1", 3);
pq.enqueue("task2", 2);
pq.enqueue("task3", 1);
pq.enqueue("task4", 10);
pq.enqueue("task5", 1);

console.log(pq);
console.log(pq.rear());
console.log(pq.printQueue());
