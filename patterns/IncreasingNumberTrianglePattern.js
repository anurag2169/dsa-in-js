// Pattern - 13: Increasing Number Triangle Pattern
// Input Format: N = 3
// Result:
// 1
// 2 3
// 4 5 6

// Input Format: N = 6
// Result:
// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11  12  13  14  15
// 16  17  18  19  20  21

function increasingNumberTrianglePattern(n) {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += count + " ";
      count++;
    }
    console.log(pattern);
  }
}
increasingNumberTrianglePattern(6);
