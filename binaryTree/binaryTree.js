class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let queue = [this.root];

    while (queue.length) {
      const node = queue.shift();
      if (!node.left) {
        node.left = newNode;
        break;
      } else {
        queue.push(node.left);
      }

      if (!node.right) {
        node.right = newNode;
        break;
      } else {
        queue.push(node.right);
      }
    }
  }
}

const tree = new BinaryTree();

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(5);

function printTreeDiagram(node, prefix = "", isLeft = true) {
  if (!node) return;

  // Print right branch first (so the tree "leans" left)
  if (node.right) {
    printTreeDiagram(node.right, prefix + (isLeft ? "│   " : "    "), false);
  }

  // Print current node
  console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);

  // Print left branch
  if (node.left) {
    printTreeDiagram(node.left, prefix + (isLeft ? "    " : "│   "), true);
  }
}

printTreeDiagram(tree.root);
