class LreCache {
  constructor(capacity) {
    this.capacity = Number(capacity);
    this.map = new Map(); //<key> : <Node Address>
    this.head = null;
    this.tail = null; //LRU Node
  }

  #removeNode(node) {}

  get(key) {}
  put(key, value) {
    if (this.map.has(key)) {
      //remove the node
    }
  }
}
