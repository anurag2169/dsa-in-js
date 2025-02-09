// Count digits in a number

// Example 1:
// Input:N = 12345
// Output:5
// Explanation:  The number 12345 has 5 digits.

// Example 2:
// Input:N = 7789
// Output: 4
// Explanation: The number 7789 has 4 digits.

function countDigit(number) {
  console.time();
  let count = 0;
  let str = number.toString();
  for (i = 0; i < str.length; i++) {
    count++;
  }
  console.timeEnd();
  return count;
}

console.log(countDigit(12345678910123456789123456789123456789));


// optimize solution for bigint 

function countDigitOptimze(number) {
  console.time();
  let cnt = Math.floor(Math.log10(number) + 1);
  console.timeEnd();

  return cnt;
}

console.log(countDigitOptimze(12345678910123456789123456789123456789));
