class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length += 1;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    this.length += 1;
  }

  printList() {
    const values = [];
    let current = this.head;
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values);
    return values;
  }

  remove(value) {
    if (this.head === null) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.length -= 1;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.length -= 1;
        return;
      }
      current = current.next;
    }
  }

  reverse() {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    let prev = null;

    while (current !== null) {
      let next = current.next;
      current.next = prev;

      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.prepend(5);
list.append(50);
list.remove(20);
list.printList();
list.reverse();
list.printList();
