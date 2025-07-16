// Binary Search

function binarySearch(arr, target) {
  arr = arr.sort((a, b) => a - b);

  console.log(arr);

  const n = arr.length;

  const start = 0;
  const end = n - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (target < arr[mid]) {
      end = mid - 1;
    }

    if (target > arr[mid]) {
      start = mid + 1;
    }
  }

  return -1;
}

const result = binarySearch([10, 3, 6, 8, 1], 6);
console.log(result);
// → Returns 2 (after sorting: [1, 3, 6, 8, 10])
