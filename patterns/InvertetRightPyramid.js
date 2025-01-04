// Pattern-5: Inverted Right Pyramid
// Input Format: N = 3
// Result:
// * * *
// * *
// *

// Input Format: N = 6
// Result:
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

function invertedRightPyramid(n) {
  for (let i = n; i > 0; i--) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += "* ";
    }
    console.log(line);
  }
}

invertedRightPyramid(7);
