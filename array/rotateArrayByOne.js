// Left Rotate the Array by One

// Example 1:
// Input: N = 5, array[] = {1,2,3,4,5}
// Output: 2,3,4,5,1

// [1, 2, 3, 4, 5];
// [2, 3, 4, 5, 1];

function rotateArrayByOne(arr, n) {
  const temp = new Array(n);

  for (i = 1; i < n; i++) {
    temp[i - 1] = arr[i];
  }
  temp[n - 1] = arr[0];
  return temp;
  console.log(temp);
}
rotateArrayByOne([1, 2, 3, 4, 5], 5);
