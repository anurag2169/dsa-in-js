// Longest Repeating Substring

// Input: "abcd" → Output: 0
// No repeating substring

// Input: "aabcaabdaab" → Output: 3
// "aab" appears 3 times

function longestRepeatingSubstring(str) {
  let n = str.length;
  let maxLength = 0;
  let seen = new Set();

  for (let length = 1; length < n; length++) {
    seen.clear();
    for (let i = 0; i <= n - length; i++) {
      let substr = str.substring(i, i + length);
      if (seen.has(substr)) {
        maxLength = length;
        break;
      }
      seen.add(substr);
    }
  }
  return maxLength;
}

console.log(longestRepeatingSubstring("abcd")); // 0
console.log(longestRepeatingSubstring("aabcaabdaab")); // 3 ("aab")
