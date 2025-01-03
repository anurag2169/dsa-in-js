export class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty : Can't perform pop operation";
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty : Can't perform peek operation";
    }

    return this.stack[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.stack.length;
  }
  printStack() {
    for (let i = 0; i < this.stack.length; i++) {
      console.log(this.stack[i]);
    }
  }
}

const stack = new Stack();

stack.push(1);
stack.push(10);
stack.push(100);
stack.push(1000);

// console.log(stack);
// console.log(stack.pop());
// console.log(stack.size());
// console.log(stack.peek());
// console.log(stack.isEmpty());

// stack.printStack();

// question 1

function reverseString(s) {
  const splitSting = s.split(" ");
  let stack = new Stack();

  for (let i of splitSting) {
    stack.push(i);
  }

  let finalString = "";
  while (stack.size() > 0) {
    const current = stack.pop();
    if (current) {
      finalString += " " + current;
    }
  }
  return finalString.trim();
}

console.log(reverseString("the sky is blue"));
console.log(reverseString("a good   example"));
