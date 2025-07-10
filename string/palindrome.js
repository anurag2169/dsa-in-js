// built-in method
function palindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reverseStr;
}

console.log(palindrome("madam"));
console.log(palindrome("madan"));
console.log(palindrome("A man, a plan, a canal. Panama"));

// without built-in
function palindrome2(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let j = str.length - 1; //last char

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[j]) {
      return false;
    }
    j--;
  }
  return true;
}

console.log(palindrome2("madam"));
console.log(palindrome2("madan"));
console.log(palindrome2("A man, a plan, a canal. Panama"));
