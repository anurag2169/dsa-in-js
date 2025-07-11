function arraySum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let first = arr[0];
  arr.shift();
  return first + arraySum(arr)
}

console.log(arraySum([1, 2, 3, 4, 5]));
