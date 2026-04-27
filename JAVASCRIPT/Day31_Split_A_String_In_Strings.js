/**
 * @param {string} s
 * @return {number}
 */
// let s = "RLRRRLLRLL";
let s = "LLLLRRRR";
var balancedStringSplit = function (s) {
  let counter = 0;
  let howManyTimeBase = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "R") {
      counter += 1;
      if (counter == 0) {
        howManyTimeBase += 1;
      }
    } else if (s[i] == "L") {
      counter -= 1;
      if (counter == 0) {
        howManyTimeBase += 1;
      }
    }
  }

  return howManyTimeBase;
};

console.log(balancedStringSplit(s));
