var missingNumber = function (nums) {
  let n = nums.length;
  let supposeSum = 0;
  let currentSum = 0;
  for (let i = 0; i < n; i++) {
    currentSum = nums[i] + currentSum;
  }

  for (let i = 0; i <= n; i++) {
    supposeSum = supposeSum + i;
  }
  console.log(supposeSum, currentSum);
  return supposeSum - currentSum;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// 9 + 6 + 4 + 2 + 3 + 5 + 7 + 0 + 1 = 37 // Current Sum
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45 // Suppose Sum
