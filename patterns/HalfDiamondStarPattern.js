// Pattern - 10: Half Diamond Star Pattern

// Input Format: N = 3
// Result:
//   *
//   **
//   ***
//   **
//   *
// Input Format: N = 6
// Result:
//      *
//      **
//      ***
//      ****
//      *****
//      ******
//      *****
//      ****
//      ***
//      **
//      *

function halfDiamondStarPattern(n) {
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
      line += "* ";
    }
    console.log(line);
  }
  for (let i = n - 1; i > 0; i--) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += "* ";
    }
    console.log(line);
  }
}

halfDiamondStarPattern(3);
