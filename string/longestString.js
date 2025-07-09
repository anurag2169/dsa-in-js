// Input : str = ["flowers" , "flow" , "fly", "flight" ]

// Output : "fl"

// Explanation : All strings given in array contains common prefix "fl".

function longestString(arr) {
  if (arr.length === 0) {
    return "";
  }

  arr.sort();

  let first = arr[0];

  let last = arr[arr.length - 1];

  let i = 0;

  while (i < first.length && first[i] === last[i]) {
    i++;
  }
  return first.substring(0, i);
}

console.log(longestString(["flowers", "flow", "fly", "flight"]));
