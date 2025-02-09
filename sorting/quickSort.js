// quick sort algorithm

// average time complexity = o(nlogn)
// best time complexity = o(nlogn)
// worst  complexity = o(nlogn^2)

// average space complexity = o(logn)
// worst space complexity = o(n)

// leet code - 912. Sort an Array (medium)
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(
  quickSort([
    44, 4, 8, 6, 74, 54, 64, 85, 7865, 585, 95, 785, 89, 295, 7, 92, 3562, 828,
    78, 554,
  ])
);
