// Pattern - 7: Star Pyramid

// Input Format: N = 3
// Result:
//   *
//  ***
// *****
// Input Format: N = 6
// Result:
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// let middle = Math.floor(n / 2);

function starPyramid(n) {
  for (let i = 0; i < n; i++) {
    let line = "";

    for (let j = 0; j <= n - i; j++) {
      line += " ";
    }
    for (let j = 0; j <= i; j++) {
      line += "* ";
    }
    console.log(line);
  }
}
starPyramid(5);
