// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */

// let s = "egg",
//   t = "add";

// var isIsomorphic = function (s, t) {
//   let hashMap = {};
//   let hashMap2 = {};

//   for (let i = 0; i < s.length; i++) {
//     if (!hashMap.hasOwnProperty(s[i])) {
//       hashMap[s[i]] = 1;
//     } else ++hashMap[s[i]];
//   }
//   for (let i = 0; i < t.length; i++) {
//     if (!hashMap2.hasOwnProperty(t[i])) {
//       hashMap2[t[i]] = 1;
//     } else ++hashMap2[t[i]];
//   }

//   return (
//     Object.values(hashMap).reduce((total, val) => total + val) ==
//     Object.values(hashMap2).reduce((total, val) => total + val)
//   );
// };

// console.log(isIsomorphic(s, t));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

let s = "egg",
  t = "add";

var isIsomorphic = function (s, t) {
  let hashMap = {};

  for (let i = 0; i < s.length; i++) {
    if (!hashMap.hasOwnProperty(s[i])) {
      hashMap[s[i]] = t[i];
    } else {
      if (hashMap[s[i]] != t[i]) hashMap[s[i]] = hashMap[s[i]];
      else {
        return false;
      }
    }
  }
};

console.log(isIsomorphic(s, t));
