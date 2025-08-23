var twoSum = function (nums, target) {
  let output = [];
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        console.log(nums[i], nums[j], target);
        output.push(nums[i]);
        output.push(nums[j]);
      }
    }
  }

  return output.slice(0, 2);
};

// [3, 2, 4]
// 2 + 4 = 6

console.log(twoSum([3, 2, 4], 6));
