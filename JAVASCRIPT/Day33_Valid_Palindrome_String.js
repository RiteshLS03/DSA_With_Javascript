// /**
//  * @param {string} s
//  * @return {boolean}
//  */

// let s = "1A man, a plan, a canal: Panama1";

// function isLetter(char) {
//   console.log(char);
//   return /^[a-z0-9]$/.test(char);
// }

// const lowerAlphabet = Array.from(
//   { length: 26 },
//   (_, i) => String.fromCharCode(97 + i),
//   hashMap.set(String.fromCharCode(97 + 1)),
// );

// hashMap.forEach((val) => {
//   console.log(val);
// });

// console.log(lowerAlphabet);

// var isPalindrome = function (s) {
//   s = s.toLowerCase();
//   let arrOfStr = [];
//   for (let i = 0; i < s.length; i++) {
//     if (isLetter(s[i])) {
//       arrOfStr.push(s[i]);
//     }
//   }

//   let start = 0;
//   let end = arrOfStr.length - 1;
//   let mid = Math.floor(arrOfStr.length / 2);

//   console.log(arrOfStr);

//   while (start < mid) {
//     if (arrOfStr[start] == arrOfStr[end]) {
//       start += 1;
//       end -= 1;
//     } else {
//       return false;
//     }
//   }
//   return true;
//   //   return arrOfStr.join("");
// };

// console.log(isPalindrome(s));
// /**
//  * @param {string} s
//  * @return {boolean}
//  */

// let s = "1A man, a plan, a canal: Panama1";

// var isPalindrome = function (s) {
//   s = s.toLowerCase();
//   let filteredString = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i].match(/^[a-z0-9]$/)) {
//       filteredString += s[i];
//     }
//   }

//   return revString == filteredString;
// };

// console.log(isPalindrome(s));
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let i = 0;
  let end = s.length - 1;

  while (i < end) {
    if (s[i].match(/^[a-z0-9]$/)) {
      if (s[end].match(/^[a-z0-9]$/)) {
        if (s[i] == s[end]) {
          i += 1;
          end -= 1;
        } else {
          return false;
        }
      } else {
        end -= 1;
      }
    } else {
      i += 1;
    }
  }

  return true;
};
