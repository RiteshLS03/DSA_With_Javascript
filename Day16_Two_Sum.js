var twoSum = function (nums, target) {
  let output = [];
  let LowerValues = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      LowerValues.push(nums[i]);
    }
  }
  console.log(LowerValues, output);

  return output;
};
//   for()

// [3, 2, 4]
// 2 + 4 = 6

console.log(twoSum([3, 2, 4], 6));
