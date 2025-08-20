// var moveZeroes = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] <= 0) {
//       let temp = nums[i];
//       nums[i] = nums[i + 1];
//       nums[i + 1] = temp;
//     } else if (nums[i] == 0) {
//       nums[i] = 0;
//     }
//   }
// };

var moveZeroes = function (nums) {
  let p = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[p] = nums[i];
      p++;
    }
  }

  for (let j = p; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
