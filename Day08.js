// function reverseInteger(num) {
//   let rev = 0;
//   while (num > 0) {
//     rem = num % 10;
//     rev = 10 * rev + rem;
//     num = Math.floor(num / 10);
//   }
//   return rev;
// }

// console.log(reverseInteger(846545));
// // 545648

// Passed in the case of the positive number only

function reverseInteger(num) {
  const numCopy = num;
  let rev = 0;
  num = Math.abs(num);
  while (num > 0) {
    rem = num % 10;
    rev = 10 * rev + rem;
    num = Math.floor(num / 10);
  }

  // let limit = Math.pow(2, 31);
  let limit = 2 ** 31; // JS Way of finding out the power
  if (rev < -limit || rev > limit) return 0;

  return numCopy < 0 ? -rev : rev;
}

console.log(reverseInteger(846545));
// 545648
