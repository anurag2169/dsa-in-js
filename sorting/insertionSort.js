function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    const key = arr[i]; //current element
    let j = i - 1;  //last element in the sorted array

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSort([44, 4, 8, 6, 74, 54, 0]));

//best time complexity = o(n)
//worst  time complexity = o(n^2)
// space complexity = o(1)
