/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//     let hashMap = new Map();

//     for (let i = 0; i < s.length; i++) {
//         hashMap.set(i, s[i]);
//     }

//     for (let j = 0; j < t.length; j++) {
//         if (!hashMap.has(t[j])) {
//             return false;
//         }
//     }

//     return true;
// };

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// let s = "anagram",
//   t = "nagaram";

// var isAnagram = function (s, t) {
//   let hashMap = new Map();
//   let setMap = new Set();

//   for (let i = 0; i < s.length; i++) {
//     hashMap.set(s[i]);
//   }
//   for (let i = 0; i < s.length; i++) {
//     setMap.add(t[i]);
//   }

//   hashMap.forEach((val, key) => console.log(key));
//   console.log("-------------------");
//   setMap.forEach((val, key) => console.log(key));

//   return true;
// };

// console.log(isAnagram(s, t));
// let s = "anagram",
//   t = "nagaram";

// var isAnagram = function (s, t) {
//   let hashMap = new Map();

//   if (s.length != t.length) return false;

//   for (let i = 0; i < s.length; i++) {
//     hashMap.set(s[i]);
//   }
//   hashMap.forEach((val, key) => console.log(key, val));

//   for (let j = 0; j < t.length; j++) {
//     if (!hashMap.has(t[j])) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(isAnagram(s, t));

// // single char unique and
// let s = "aacc",
//   t = "ccac";
// // Output :- false

// var isAnagram = function (s, t) {
//   let hashMap = new Map();

//   if (s.length != t.length) return false;

//   for (let i = 0; i < s.length; i++) {
//     if (hashMap.has(s[i])) {
//       hashMap.set(s[i], hashMap.get(s[i]) + 1);
//     } else {
//       hashMap.set(s[i], 1);
//     }
//   }
//   hashMap.forEach((val, key) => console.log(key, val));

//   for (let j = 0; j < t.length; j++) {
//     if (hashMap.get(t[j]) <= 0) {
//       return false;
//     } else {
//       hashMap.set(t[j], hashMap.get(t[j]) - 1);
//     }
//   }

//   return true;
// };

// console.log(isAnagram(s, t));

// The solution which was submitted by me by using the hashMap
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//   let hashMap = new Map();

//   if (s.length !== t.length) return false;

//   for (let i = 0; i < s.length; i++) {
//     if (hashMap.has(s[i])) {
//       hashMap.set(s[i], hashMap.get(s[i]) + 1);
//     } else {
//       hashMap.set(s[i], 1);
//     }
//   }

//   for (let j = 0; j < t.length; j++) {
//     if (!hashMap.has(t[j])) {
//       return false;
//     } else {
//       if (hashMap.get(t[j]) <= 0) {
//         return false;
//       } else {
//         hashMap.set(t[j], hashMap.get(t[j]) - 1);
//       }
//     }
//   }

//   return true;
// };
// console.log(isAnagram(s, t));

// Now akshay came up with the sort method

let s = "anagram",
  t = "nagaram";

var isAnagram = function (s, t) {
  return s.split().sort.join() == t.split().sort.join();
};

console.log(isAnagram(s, t));
