// Print all Divisors of a given Number

// A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.

// Input:N = 36
// Output:[1, 2, 3, 4, 6, 9, 12, 18, 36]

function divisors(n) {
  let results = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      results.push(i);
    }
  }
  return results;
}

console.log(divisors(36));
console.log(divisors(12));

// optimized solution
function divisorsOptimized(n) {
  let results = [];
  let squareRoot = Math.sqrt(n);
  for (let i = 1; i <= squareRoot; i++) {
    if (n % i === 0) {
      results.push(i);
      if (i !== n / i) {
        results.push(n / i);
      }
    }
  }
  return results;
}

console.log(divisors(36));
console.log(divisors(12));
console.log(divisors(12));
console.log(divisors(12));
