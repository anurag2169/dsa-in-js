// Pattern - 12: Number Crown Pattern

// Input Format: N = 3
// Result:
// 1    1
// 12  21
// 123321

// Input Format: N = 6
// Result:
// 1           1
// 12         21
// 12        321
// 1234     4321
// 12345   54321
// 123456 654321

function numberCrownPattern(n) {
  for (i = 1; i <= n; i++) {
    let line = "";
    for (j = 1; j <= i; j++) {
      line += j;
    }
    for (j = 1; j <= 2 * (n - i); j++) {
      line += " ";
    }
    for (j = i; j >= 1; j--) {
      line += j;
    }
    console.log(line);
  }
}

numberCrownPattern(6);
