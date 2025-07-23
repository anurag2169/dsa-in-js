class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

const root2 = new Node(1);

root2.left = new Node(2);
root2.right = new Node(3);
root2.left.left = new Node(4);
root2.left.right = new Node(5);
root2.right.left = new Node(6);

// Pre-Order Traversal (Root, Left, Right)

function preOrder(node) {
  if (!node) return;
  console.log(node.value);

  preOrder(node.left);
  preOrder(node.right);
}

// preOrder(root);

// In-Order Traversal (Left, Root, Right)
function inOrder(node) {
  if (!node) return;

  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
}

// inOrder(root);

// Post-Order Traversal (Left, Right, Root)
function postOrder(node) {
  if (!node) return;

  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
}
// postOrder(root);

// Breadth-First Traversal (Level Order)

function levelOrder(root) {
  if (!root) return;

  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    console.log(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

// levelOrder(root);
//leet code question : 102
var levelOrder = function (root) {
  if (!root) return [];

  const queue = [root, null];
  let result = [];
  let level = [];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) {
      result.push([...level]);
      level = [];
      if (queue.length > 0) queue.push(null);
    } else {
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
};

var levelOrderBottom = function (root) {
  if (!root) return [];

  let level = [];
  const result = [];
  const queue = [root, null];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) {
      result.push([...level]);
      level = [];
      if (queue.length > 0) queue.push(null);
    } else {
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      level.push(node.value);
    }
  }
  return result.reverse();
};
// console.log(levelOrderBottom(root));

// Count Total Nodes
function countNodes(node) {
  if (!node) return 0;
  return 1 + countNodes(node.left) + countNodes(node.right);
}
// console.log(countNodes(root));

// Height/Depth of Tree

function height(node) {
  if (!node) return 0;
  return 1 + Math.max(height(node.left), height(node.right));
}
// console.log(height(root));

// Count Leaf Nodes

function leafNodeCount(node) {
  if (!node) return 0;
  if (!node.left && !node.right) return 1;
  return leafNodeCount(node.left) + leafNodeCount(node.right);
}
// console.log(leafNodeCount(root));

// Maximum Value in Binary Tree
function maxValue(node) {
  if (!node) return -Infinity;
  return Math.max(node.value, maxValue(node.left), maxValue(node.right));
}

// console.log(maxValue(root));

function minValue(node) {
  if (!node) return Infinity;
  return Math.min(node.value, minValue(node.left), minValue(node.right));
}
// console.log(minValue(root));

// identical trees
function isIdenticaltrees(t1, t2) {
  if (!t1 && !t2) return true;
  if (!t1 || !t2) return false;

  return (
    t1.value === t2.value &&
    isIdenticaltrees(t1.left, t2.left) &&
    isIdenticaltrees(t1.right, t2.right)
  );
}
// console.log(isIdenticaltrees(root, root2));

var minDepth = function (root) {
  if (!root) return 0;

  const queue = [[root, 1]];

  while (queue.length > 0) {
    const [node, depth] = queue.shift();

    if (!node.left && !node.right) return depth;

    if (node.left) {
      queue.push([node.left, depth + 1]);
    }
    if (node.right) {
      queue.push([node.right, depth + 1]);
    }
  }
};
// console.log(minDepth(root));

// The root-to-leaf path with the target sum is shown.
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  let queue = [[root, root.val]];

  while (queue.length > 0) {
    const [node, sum] = queue.shift();

    if (!node.left && !node.right && sum === targetSum) {
      return true;
    }
    if (node.left) queue.push([node.left, sum + node.left.val]);
    if (node.right) queue.push([node.right, sum + node.right.val]);
  }
  return false;
};
