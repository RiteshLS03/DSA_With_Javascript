// let s = "abcdefghijklmnopqrstuvwxyz".split("");
// k = 2;
// k2 = k * 2;

// const reverseStringII = (s, k) => {

//   for (let i = 0; i < s.length; i += k2) {
//     let start = i;
//     let end = k;
//     let temp;
//     while (start < end) {
//       temp = s[start];
//       s[start] = s[end];
//       s[end] = temp;
//       start += 1;
//       end -= 1;
//     }
//   }

//   // return "revString";
//   return s.join("");
// };
// console.log(reverseStringII(s, k));

// let s = "abcdefghijklmnopqrstuvwxyz".split("");
// k = 2;
// k2 = k * 2;

// const reverseStringII = (s, k) => {

//   // return "revString";
// };
// console.log(reverseStringII(s, k));

// let s = "abcdefghijklmnopqrstuvwxyz".split("");
let s = "abcd".split("");
k = 2;
k2 = k * 2;

const reverseStr = (s, k) => {
  s = s.split("");

  for (let j = 0; j < s.length; j = j + 2 * k) {
    let start = j;
    let end = Math.min(j + k - 1, s.length - 1);

    while (start < end) {
      let temp = s[start];
      s[start] = s[end];
      s[end] = temp;
      start++;
      end--;
    }
  }

  return s.join("");
};
console.log(reverseStringII(s, k));
