/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [2, 7, 11, 15],
  target = 9;

var twoSum = function (nums, target) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    hashMap.set(nums[i], i);
  }
  return arr;
};
