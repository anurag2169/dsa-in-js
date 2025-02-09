// input [44,4,8,6,74,54]

function bubbleSort(arr) {
  let n = arr.length;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([44, 4, 8, 6, 74, 54]));
