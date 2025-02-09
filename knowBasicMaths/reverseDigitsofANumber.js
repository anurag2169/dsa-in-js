// Reverse Digits of A Number

// Example 1:
// Input:N = 12345
// Output:54321
// Explanation: The reverse of 12345 is 54321.

// Example 2:
// Input:N = 7789
// Output: 9877
// Explanation: The reverse of number 7789 is 9877.

function reverseDigit(n) {
  const reverseNum = +n.toString().split("").reverse().join("");
  return reverseNum;
}

console.log(reverseDigit(123515654450000));
