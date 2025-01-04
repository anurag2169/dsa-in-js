// Pattern-1: Rectangular Star Pattern

// Problem Statement: Given an integer N, print the following pattern.

// Example 1:
// Input: N = 3
// Output:
// * * *
// * * *
// * * *

// solution:

// i == rows (number of lines)
// j =coloums

function printSqurePattern(n) {
  for (let i = 1; i <= n; i++) {
    let star = "";
    for (let j = 1; j <= n; j++) {
      star += "* ";
    }
    console.log(star);
  }
}
printSqurePattern(2);
