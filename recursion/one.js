// example of tail recursion
function printNumber(lrange, urange) {
  // base case
  if (lrange > urange) {
    return;
  }

  console.log(lrange);
  printNumber(lrange + 1, urange);
}

printNumber(1, 5); //1 2 3 4 5


// <----------------------------------------------------------------------------->

// example of head recursion
function printNumber2(lrange, urange) {
  // base case
  if (lrange > urange) {
    return;
  }

  printNumber2(lrange + 1, urange);
  console.log(lrange);
}

printNumber2(1, 5);
// 5
// 4
// 3
// 2
// 1
