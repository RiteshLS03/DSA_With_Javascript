var removeElement = function (nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] = !val)) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }

  console.log(x + 1);
};

// removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
removeElement([3, 2, 2, 3], 3);
// Output: 5, nums = [0,1,4,0,3,_,_,_]
