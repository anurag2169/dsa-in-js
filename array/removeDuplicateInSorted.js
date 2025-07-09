// Remove Duplicates in-place from Sorted Array

function removeDuplicate(nums) {
  let set = new Set(nums);
  let uniqureArr = Array.from(set);
  for (let i = 0; i < uniqureArr.length; i++) {
    nums[i] = uniqureArr[i];
  }
  console.log(uniqureArr);

  return uniqureArr.length;
}

function removeDuplicate2(nums) {
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  console.log(nums);
  return k;
}
console.log(removeDuplicate([1, 1, 2, 2, 2, 3, 3]));
console.log(removeDuplicate2([1, 1, 2, 2, 2, 3, 3]));
