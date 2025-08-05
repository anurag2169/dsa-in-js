// Valid Parentheses
// Problem: Check if a string containing ()[]{} is valid (well-formed).

// Example: "([{}])" → ✅ valid

// DSA Concepts: Stack

function isValid(s) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(isValid("([{}])"));
console.log(isValid("()[]{}"));
console.log(isValid("[(])"));
