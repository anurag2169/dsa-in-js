function binarySearchRecursive(arr, tagret, start, end) {
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === tagret) {
    return mid;
  }

  if (tagret < arr[mid]) {
    return binarySearchRecursive(arr, tagret, start, mid - 1);
  }

  if (tagret > arr[mid]) {
    return binarySearchRecursive(arr, tagret, mid + 1, end);
  }
}

const result = binarySearchRecursive([1, 3, 6, 8, 10], 10, 0, 4);
console.log(result);
