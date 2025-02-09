class node {
  constructor(data) {
    this.head = null;
  }
}

class linklist {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  print() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}
