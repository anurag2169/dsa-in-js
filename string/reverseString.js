// problem Statement: Given a string s, reverse the words of the string.

// Examples:

// Example 1:
// Input: s=”this is an amazing program”
// Output: “program amazing an is this”

// Example 2:
// Input: s=”This is decent”
// Output: “decent is This”

function reverseString(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(reverseString("this is an amazing program"));
