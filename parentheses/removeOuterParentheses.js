function removeOuterParentheses(str) {
  let count = 0;
  let result = "";
  for (let char of str) {
    if (char === "(") {
      if (count > 0) result += char;
      count++;
    } else if (char === ")") {
      count--;
      if (count > 0) result += char;
    }
  }
  return result;
}
console.log(removeOuterParentheses("(()())(())"));
