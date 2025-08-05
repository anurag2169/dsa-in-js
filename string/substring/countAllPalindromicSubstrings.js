// Count All Palindromic Substrings

function countAllPalindromicSubstrings(str) {
  let count = 0;
  for (let center = 0; center < 2 * str.length; center++) {
    let left = Math.floor(center / 2);
    let right = left + (center % 2);

    while (left >= 0 && right < str.length && str[left] === str[right]) {
      console.log(left, right);
      console.log(str.substring(left, right + 1));
      count++;
      left--;
      right++;
    }
  }
  return count;
}

console.log(countAllPalindromicSubstrings("aaaba"));
