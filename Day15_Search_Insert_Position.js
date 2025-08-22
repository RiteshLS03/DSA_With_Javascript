// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == target) {
//       return i;
//     } else if (nums[i] < target && nums[i + 1] > target) {
//       return i + 1;
//     } else if (nums[i] >= nums.length) {
//       return nums.length;
//     }
//   }
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let firstIndex = 0;
  let lastIndex = nums.length - 1;
  while (firstIndex <= lastIndex) {
    let mid = Math.floor((firstIndex + lastIndex) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      firstIndex = mid + 1;
    } else {
      lastIndex = mid - 1;
    }
  }
  return firstIndex;
};
