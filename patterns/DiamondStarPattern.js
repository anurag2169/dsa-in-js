//  Pattern - 9: Diamond Star Pattern

// Input Format: N = 3
// Result:
//   *
//  ***
// *****
// *****
//  ***
//   *
// Input Format: N = 6
// Result:
//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

function diamondstarPattern(n) {
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n - i - 1; j++) {
      line += " ";
    }
    for (let j = 0; j <= i; j++) {
      line += "* ";
    }
    console.log(line);
  }
  for (let i = n; i > 0; i--) {
    let line = "";

    for (let j = 0; j < n - i; j++) {
      line += " ";
    }

    for (let j = 0; j < i; j++) {
      line += "* ";
    }
    console.log(line);
  }
}
diamondstarPattern(5);
