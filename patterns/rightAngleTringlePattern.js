// Pattern-2: Right-Angled Triangle Pattern

// Input Format: N = 3
// Result:
// *
// * *
// * * *

function rightAngleTrianglePattern(n) {
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
      line += "* ";
    }
    console.log(line);
  }
}

rightAngleTrianglePattern(3);
