var findMaxConsecutiveOnes = function (nums) {
  let consecutive = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      consecutive += 1;
    } else {
      consecutive = 0;
    }
  }
  return consecutive;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
