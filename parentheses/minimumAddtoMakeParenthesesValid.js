// Minimum Add to Make Parentheses Valid

// Given a string s consisting only of '(' and ')', return the minimum number of parentheses that must be added to make the string valid.

function minAddToMakeValid(s) {
  let open = 0;
  let insertions = 0;

  for (let char of s) {
    if (char === "(") {
      open++;
    } else {
      if (open > 0) {
        open--;
      } else {
        insertions++;
      }
    }
  }
  return insertions + open;
}

console.log(minAddToMakeValid("())"));
console.log(minAddToMakeValid("()()"));
console.log(minAddToMakeValid(")("));
