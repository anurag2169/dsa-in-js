// Pattern-14: Increasing Letter Triangle Pattern

// Input Format: N = 3
// Result:
// A
// A B
// A B C

// Input Format: N = 6
// Result:
// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F

function increasingLetterTrianglePattern(n) {
  for (let i = 0; i < n; i++) {
    let currentCharCode = 65;
    let pattern = "";
    for (let j = 0; j <= i; j++) {
      pattern += String.fromCharCode(currentCharCode) + " ";
      currentCharCode++;
    }
    console.log(pattern);
  }
}
increasingLetterTrianglePattern(6);
