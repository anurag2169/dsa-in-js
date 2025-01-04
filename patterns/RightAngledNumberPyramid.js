// Pattern - 3: Right-Angled Number Pyramid
// Input Format: N = 3
// Result:
// 1
// 1 2
// 1 2 3

function rightAngledNumberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j + " ";
    }
    console.log(line);
  }
}
rightAngledNumberPyramid(7);
