class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class doublyLinkedist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length += 1;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length += 1;
  }

  printForward() {
    let values = [];
    let current = this.head;
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }

  printBackward() {
    let values = [];
    let current = this.tail;
    while (current !== null) {
      values.push(current.value);
      current = current.prev;
    }
    return values;
  }

  remove(value) {
    if (this.head === null) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;

      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length -= 1;
      return;
    }
    if (this.tail.value === value) {
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length -= 1;
      return;
    }

    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        current.prev.next = current.next;
        current.next.prev = current.prev;
        this.length -= 1;
        return;
      }
      current = current.next;
    }
  }

  reverse() {
    let current = this.head;
    let temp = null;

    while (current !== null) {
      temp = current.next;
      current.next = current.prev;
      current.prev = temp;

      console.log(current);

      current = current.prev;
    }

    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  insertAt(index, value) {
    if (index < 0 || index > this.length) return;

    if (index === 0) {
      this.prepend(value);
    }
    if (index === this.length) {
      return this.append(value);
    }

    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    let after = current.next;
    const newNode = new Node(value);

    newNode.prev = current;
    newNode.next = after;

    current.next = newNode;
    after.prev = newNode;

    this.length += 1;
  }

  //   [5, 10, 30]
  removeAt(index) {
    if (index < 0 || index >= this.length) return;

    if (index === 0) {
      this.remove(this.head.value);
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    this.remove(current.value);
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  find(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  hasCycle() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true;
      }
    }
    return false;
  }

  detectCycle() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        let pointer = this.head;
        while (pointer !== slow) {
          pointer = pointer.next;
          slow = slow.next;
        }
        return pointer;
      }
    }
    return null;
  }
}

const list = new doublyLinkedist();
// list.append(10);
// list.append(20);
// list.append(30);
// list.prepend(5);
// console.dir(list, { depth: null });
// list.remove(20);
// console.log(list.printForward()); // Should print: [5, 10, 30]
// console.log(list.printBackward()); // Should print: [30, 10, 5]

// console.log("Before Reverse:", list.printForward());
// list.reverse();
// console.log("After Reverse:", list.printForward());
// console.log(list.hasCycle());
// console.log(list.detectCycle());
// list.insertAt(2, 50);
// console.log(list.printForward());
// list.removeAt(4);
// console.log(list.printForward());
// console.log(list.get(4));

// merge two sorted linked list
// Remove Duplicates from a Sorted Linked List
// Queue - Linked List Implementation
// Implement a stack using singly linked list
// Remove every k-th node of the linked list
// Remove duplicates from an unsorted doubly linked list

// cycle detection testing
list.append(10); // index 0
list.append(20); // index 1
list.append(30); // index 2
list.append(40); // index 3
list.append(50); // index 4

// Manually get nodes
// let node1 = list.head.next; // node with value 20 (index 1)
// let node4 = list.head.next.next.next.next; // node with value 50 (index 4)

// // Create cycle: 50 → 20
// node4.next = node1;

console.log("Cycle exists:", list.hasCycle());
// ✅ Should print: true

let cycleStart = list.detectCycle();
if (cycleStart) {
  console.log("Cycle starts at node with value:", cycleStart.value);
  // ✅ Should print: 20
} else {
  console.log("No cycle detected");
}
