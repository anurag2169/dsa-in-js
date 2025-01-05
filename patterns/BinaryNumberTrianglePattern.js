// Pattern - 11: Binary Number Triangle Pattern

// Input Format: N = 3
// Result:
// 1
// 01
// 101

// Input Format: N = 6
// Result:
// 1
// 01
// 101
// 0101
// 10101
// 010101

function binaryNumberTrianglePattern(n) {
  for (i = 0; i < n; i++) {
    let line = "";

    for (j = 0; j <= i; j++) {
      if ((i + j) % 2 === 0) {
        line += 1;
      } else {
        line += 0;
      }
    }
    console.log(line);
  }
}

binaryNumberTrianglePattern(6);
