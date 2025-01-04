// Pattern - 8: Inverted Star Pyramid

// Input Format: N = 3
// Result:
// *****
//  ***
//   *
// Input Format: N = 6
// Result:
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

function invertedStarPyramid(n) {
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
invertedStarPyramid(5);
