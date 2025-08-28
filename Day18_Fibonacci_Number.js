// /**
//  * @param {number} n
//  * @return {number}
//  */
// var fib = function (n) {
//   let first = 0;
//   let second = 1;
//   let addition = 0;
//   for (let i = 2; i < n; i++) {
//     if (n == addition) {
//       return i;
//     } else {
//       addition = first + second;
//       return addition;
//     }
//   }
//   return addition;
// };

// console.log(fib(4));

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};
