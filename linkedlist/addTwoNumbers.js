export class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

let addTwoNumbers = function (l1, l2) {
  let dummyHead = new Node(0);

  let current = dummyHead;

  let carry = 0;
  while (l1 || l2 || carry) {
    let v1 = l1 ? l1.value : 0;
    let v2 = l2 ? l2.value : 0;

    let sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);

    current.next = new Node(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return dummyHead.next;
};

let addTwoNumbersRecursive = function (l1, l2, carry = 0) {
  if (!l1 && !l2 && !carry) {
    return null;
  }
  let v1 = l1 ? l1.value : 0;
  let v2 = l2 ? l2.value : 0;
  let sum = v1 + v2 + carry;
  let newNode = new Node(sum % 10);
  newNode.next = addTwoNumbersRecursive(
    l1 ? l1.next : null,
    l2 ? l2.next : null,
    Math.floor(sum / 10)
  );
  return newNode;
};

// Helper: create linked list from array
export function createList(arr) {
  let head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper: print linked list
export function printList(head) {
  let result = [];
  while (head) {
    result.push(head.value);
    head = head.next;
  }
  console.log(result);
}

// Sample inputs (like the LeetCode example)
let l1 = createList([9, 9, 9, 9, 9, 9, 9]); // Represents 342
let l2 = createList([9, 9, 9, 9]); // Represents 465

// let result = addTwoNumbers(l1, l2); // Should output [7,0,8]
// let result2 = addTwoNumbersRecursive(l1, l2); // Should output [7,0,8]
// printList(result);
// printList(result2);
