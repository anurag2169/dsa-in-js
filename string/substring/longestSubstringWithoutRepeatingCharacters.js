// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

// Example:
// Input: "abcabcbb" → Output: 3 → Substring: "abc"

// Input: "bbbbb" → Output: 1 → Substring: "b"

// Input: "pwwkew" → Output: 3 → Substring: "wke"

function longestSubstringWithoutRepeatingCharacters(str) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;
  let start = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }
    set.add(str[right]);

    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      start = left;
    }
  }
  return str.substring(start, start + maxLength);
}

console.log(longestSubstringWithoutRepeatingCharacters("pwwkew")); // Output: "wke"
console.log(longestSubstringWithoutRepeatingCharacters("abcabcbb")); // Output: "abc"
console.log(longestSubstringWithoutRepeatingCharacters("bbbb")); // Output: "b"

function lengthOfLongestSubstring(str) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }
    set.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
