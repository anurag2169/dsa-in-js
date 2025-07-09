function largestOddNumber(s) {
  const length = s.length;

  for (let i = length - 1; i >= 0; i--) {
    if (parseInt(s[i]) % 2 !== 0) {
      return s.substring(0, i + 1).replace(/^0+/, "");;
    }
  }
  return "";
}
console.log(largestOddNumber("5347"));
console.log(largestOddNumber("0214638"));
