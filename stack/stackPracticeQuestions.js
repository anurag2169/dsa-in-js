import Stack from "./stack.js";

// question 1 - Reverse a String Using a Stack

function reverseString(str) {
  const splitStr = str.split(" ");
  let myStack = new Stack();

  for (let char in splitStr) {
    myStack.push(char);
  }
}
