// const arr = [
//   0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 7, 8, 8, 8, 8, 10,
// ];

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; // [  0, 1, 2, 3, 4, 2, 2, 3, 3, 4 ]

function removeDups(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  //   return x + 1;
  return nums;
}

console.log(removeDups(arr)); // 10
