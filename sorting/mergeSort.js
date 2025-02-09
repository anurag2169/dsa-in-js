// merge sort algorithm
// time complecity = o(nlog n)
// space complecity = o(n)

// leetcode question - 56. Merge Intervals
function mergeSort(arr) {
  // log(n) -tc
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sortedArray = [];
  //   n - tc
  //   n 0-sc

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}

console.log(
  mergeSort([44, 69, 25, 58, 6, 8, 7, 69, 25, 58, 789, 2585, 780, 69, 25])
);
