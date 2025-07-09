// Rotate array by K elements

// Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.

// Examples:

// Example 1:
// Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
// Output: 6 7 1 2 3 4 5
// Explanation: array is rotated to right by 2 position .

// Example 2:
// Input: N = 6, array[] = {3,7,8,9,10,11} , k=3 , left
// Output: 9 10 11 3 7 8
// Explanation: Array is rotated to right by 3 position.

function rotateArrayByK(arr, n, k, d) {
  let temp = [];

  if (d === "left") {
    for (i = k; i < n; i++) {
      temp.push(arr[i]);
    }
    for (i = 0; i < k; i++) {
      temp.push(arr[i]);
    }
  } else if (d === "right") {
    for (let i = n - k; i < n; i++) {
      temp.push(arr[i]);
    }
    for (let i = 0; i < n - k; i++) {
      temp.push(arr[i]);
    }
  }
  console.log(temp);
  return temp;
}
rotateArrayByK([1, 2, 3, 4, 5, 6, 7], 7, 2, "left");
rotateArrayByK([1, 2, 3, 4, 5, 6, 7], 7, 2, "right");
