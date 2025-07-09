function secondLargest(arr) {
  if (arr.length < 2) {
    return -1;
  }

  let large = -Infinity;
  let secondLarge = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      secondLarge = large;
      large = arr[i];
    } else if (arr[i] > secondLarge && arr[i] !== large) {
      secondLarge = arr[i];
    }
  }
  return secondLarge;
}
console.log(secondLargest([1, 2, 4, 7, 7, 15]));
