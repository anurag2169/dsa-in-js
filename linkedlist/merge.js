import { createList, Node, printList } from "./addTwoNumbers.js";

let mergeSortedList = function (l1, l2) {
  let dummyhead = new Node(0);
  let current = dummyhead;
  while (l1 && l2) {
    if (l1.value < l2.value) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 || l2;

  return dummyhead.next;
};

// let l1 = createList([5, 7, 9, 41]);
// let l2 = createList([4, 5, 6]);

// let result = mergeSortedList(l1, l2);
// printList(result);

let mergeKLists = function (lists) {
  let values = [];
  for (let head of lists) {
    while (head) {
      values.push(head.value);
      head = head.next;
    }
  }

  values.sort((a, b) => a - b);

  let dummyHead = new Node(0);
  let current = dummyHead;

  for (let val of values) {
    current.next = new Node(val);
    current = current.next;
  }

  return dummyHead.next;
};

let l1 = createList([1, 4, 5]);
let l2 = createList([1, 3, 4]);
let l3 = createList([2, 6]);

let merged = mergeKLists([l1, l2, l3]);
printList(merged); // Expected: [1,1,2,3,4,4,5,6]
