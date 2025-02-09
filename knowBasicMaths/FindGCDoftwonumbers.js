// Find GCD of two numbers

// Problem Statement: Given two integers N1 and N2, find their greatest common divisor.

// The Greatest Common Divisor of any two integers is the largest number that divides both integers.

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// first approach
function gcd(a, b) {
  let factorOfA = [];
  let factorOfB = [];

  for (let i = 1; i <= 9; i++) {
    if (a % i == 0) {
      factorOfA.push(i);
    }
    if (b % i == 0) {
      factorOfB.push(i);
    }
  }
  let commonFactor = factorOfA.filter((element) => factorOfB.includes(element));

  return commonFactor[commonFactor.length - 1];
}
console.log(gcd(9, 12));
console.log(gcd(20, 15));

// second approach
function gcd2(a, b) {
  let factor = [];

  for (let i = 1; i <= 9; i++) {
    if (a % i == 0 && b % i == 0) {
      factor.push(i);
    }
  }
  return factor[factor.length - 1];
}
console.log(gcd2(9, 12));
console.log(gcd2(20, 15));
