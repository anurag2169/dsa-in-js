function isNumberArmstrong(number) {
  const stringNumber = number.toString();
  const lengthOfDigits = stringNumber.length;

  let sum = 0;

  for (i = 0; i < lengthOfDigits; i++) {
    const digit = parseInt(stringNumber[i], 10);
    sum += Math.pow(digit, lengthOfDigits);
  }
  return sum === number;
}

console.log(isNumberArmstrong(153));
console.log(isNumberArmstrong(370));
console.log(isNumberArmstrong(123));
