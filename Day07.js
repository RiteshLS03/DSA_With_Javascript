// let n = 5465456;

// const countsDigitsInANumber = (n) => {
//   if (n == 0) return 1;
//   let count = 0;
//   while (n > 0) {
//     n = Math.floor(n / 10);
//     count++;
//   }
//   return count;
// };

// console.log(countsDigitsInANumber(n));

const isPalindrome = (num) => {
  let reverse = 0;
  let numCopy = num;
  while (num > 0) {
    let remainder = num % 10;
    reverse = 10 * reverse + remainder;
    num = Math.floor(num / 10);
    // console.log(num, reverse);
  }
  //   console.log(num, reverse);
  if (numCopy == reverse) return true;
  else {
    return false;
  }
};

console.log(isPalindrome(1221));
