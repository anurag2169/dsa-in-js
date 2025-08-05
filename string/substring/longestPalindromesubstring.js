// Longest Palindromic Substring

// Given a string s, return the longest palindromic substring in s.
// Example:
// Input: "babad" → Output: "bab" or "aba"

function longestPalindromeSubstring(str) {
  if (!str || str.length < 1) return "";
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    const odd = expandAroundCenter(str, i, i);
    const even = expandAroundCenter(str, i, i + 1);

    if (odd.length > longest.length) longest = odd;
    if (even.length > longest.length) longest = even;
  }

  return longest;
}
function expandAroundCenter(str, left, right) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  return str.substring(left + 1, right);
}
console.log(longestPalindromeSubstring("babad"));
