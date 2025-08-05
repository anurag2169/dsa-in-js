// Longest Valid Parentheses (🔥 Very Important)
// Problem: Find the length of the longest valid parentheses substring.

// Input: "(()))()" → Output: 4 (substring: "()")
// stack

function longestValidParentheses(s) {
  let maxLength = 0;
  let stack = [-1];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
      }
    }
  }
  return maxLength;
}
console.log(longestValidParentheses("(()))()"));
console.log(longestValidParentheses("((()))()"));
console.log(longestValidParentheses("((()))(()"));
