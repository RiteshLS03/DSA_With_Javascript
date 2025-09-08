/// BRUTE FORCE TECHNIQUE

// var twoSum = function (nums, target) {
//   let output = [];
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         console.log(nums[i], nums[j], target);
//         output.push(nums[i]);
//         output.push(nums[j]);
//       }
//     }
//   }

//   return output.slice(0, 2);
// };

// // [3, 2, 4]
// // 2 + 4 = 6

// console.log(twoSum([3, 2, 4], 6));
// //

function twoSum(nums, target) {
  const map = {}; // hash table to store number -> index

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    // check if complement is already stored
    if (map.hasOwnProperty(complement)) {
      return [map[complement], i]; // indices of the two numbers
    }

    // store current number with its index
    map[num] = i;
  }

  return []; // if no solution found
}

// Example
console.log(twoSum([2, 7, 11, 15, 4, 84, 6, 654, 15, 21, 9], 23)); // [0, 1]
