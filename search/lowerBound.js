// arr = [1, 3, 3, 5, 7]
// target = 3

function lowerBound(arr, target) {
  let n = arr.length;
  let start = 0;
  let end = n - 1;
  let ans = arr.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] >= target) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return ans;
}

const arr = [1, 3, 3, 5, 7];

console.log(lowerBound(arr, 3)); // Output: 1 (index of first 3)
console.log(lowerBound(arr, 4)); // Output: 3 (index of 5)
console.log(lowerBound(arr, 8)); // Output: 5 (not found, insert at end)
