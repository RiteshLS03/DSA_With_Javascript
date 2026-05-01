/**
 * @param {string} num
 * @return {string}
 */

let num = "4260";
// let num = "35427";

// var largestOddNumber = function (num) {
//   let end = num.length - 1;
//   console.log(num, num[end]);

//   while (num[end] % 2 == 0) {
//     console.log(num);
//     num = num.length - 1;
//     console.log(num);
//   }

//   return num;
// };

// console.log(largestOddNumber(num));

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  let odd = new Set(["1", "3", "5", "7", "9"]);
  let n = num.length - 1;
  for (let i = n; i >= 0; i--) {
    if (odd.has(num[i])) {
      return num.slice(0, i + 1);
    }
  }
  return "";
};
