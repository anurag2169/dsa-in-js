class CircularQueue {
  constructor(k) {
    this.queue = new Array(k); //fixed sized array
    this.capacity = k;
    this.front = -1;
    this.rear = -1;
  }

  enqueue(value) {
    if ((this.rear + 1) % this.capacity === this.front) {
      return "Max limit reached";
    }
    if (this.front === -1) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.queue[this.rear] = value;
  }

  dequeue() {
    if (this.front === -1) {
      return "Queue is empty";
    }

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capacity;
    }
  }
}

let cq = new CircularQueue(3);
console.log(cq);
cq.enqueue(10); // front = 0, rear = 0 → [10, , ]
cq.enqueue(20); // rear = 1            → [10, 20, ]
cq.enqueue(30); // rear = 2            → [10, 20, 30]
cq.enqueue(40); // returns "Max limit reached"
console.log(cq);
cq.dequeue(); // front moves to 1   → [10, 20, 30]
cq.enqueue(40); // rear = 0 (circular) → [40, 20, 30]
console.log(cq);
