// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// burt force solution - in leet code error time limit exceeded
var maxSlidingWindow1 = function (nums, k) {
  const result = [];
  const n = nums.length;

  for (let i = 0; i < n - k; i++) {
    let max = nums[i];

    for (let j = 1; j < k; j++) {
      if (nums[j + i] > max) {
        max = nums[j + i];
      }
    }
    result.push(max);
  }
  return result;
};

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

var maxSlidingWindow = function (nums, k) {
  const result = [];
  const deque = [];

  for (let i = 0; i < nums.length; i++) {
    if (deque.length > 0 && deque[0] < i - k) {
      deque.shift();
    }
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }
  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
