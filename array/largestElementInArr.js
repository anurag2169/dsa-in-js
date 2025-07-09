function largestElement(arr) {
  let num = arr[0];

  for (i = 0; i <= arr.length - 1; i++) {
    if (num < arr[i]) {
      num = arr[i];
    }
  }
  return num;
}

console.log(largestElement([2, 5, 1, 3, 10]));
