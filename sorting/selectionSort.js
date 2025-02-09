// input = [63,6,55,85,8]

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    //n
    let minIndex = i;
    for (j = i; j < n; j++) {
      //n
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([63, 6, 55, 85, 8]));

//TIME COMPLEXITY = o(n^2)

// space complexity = o(1)
