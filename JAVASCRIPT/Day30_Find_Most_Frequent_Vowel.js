// /**
//  * @param {string} s
//  * @return {number}
//  */

// // let s = "successes";
// let s = "aeiaeia";
// var maxFreqSum = function (s) {
//   const hashMap = new Map([
//     ["a", 0],
//     ["e", 0],
//     ["i", 0],
//     ["o", 0],
//     ["u", 0],
//   ]);
//   // hashMap.forEach((val, key) => console.log({ key: key, val: val }));
//   for (let i = 0; i < s.length; i++) {
//     if (hashMap.has(s[i])) {
//       hashMap.set(s[i], hashMap.get(s[i]) + 1);
//     } else {
//       hashMap.set(s[i], 1);
//     }
//   }

//   let largestConsonant = { key: "", val: 0 };

//   hashMap.forEach((val, key) => {
//     // console.log(val, key);
//     if (largestConsonant.val < val) {
//       largestConsonant.key = key;
//       largestConsonant.val = val;
//     }
//   });

//   let largestVowel = { key: "", val: 0 };

//   ["a", "e", "i", "o", "u"].forEach((val, key) => {
//     // console.log(val, key);
//     // console.log({ [`hashMap.get(${val})`]: hashMap.get(val) });
//     let hashMapKey = hashMap.get(val);
//     // console.log(hashMapKey);
//     if (!hashMap.has(val) && largestVowel.val < hashMap.get(val)) {
//       largestVowel.key = val;
//       largestVowel.val = hashMap.get(val);
//       console.log(largestVowel.key);
//     }
//   });

//   return largestConsonant.val + largestVowel.val;
//   // return {
//   // largestConsonant: largestConsonant.val,
//   // largestVowel: largestVowel.val,
//   // largestConsonant,
//   // largestVowel,
//   // };?
// };

// console.log(maxFreqSum(s));

/**
 * @param {string} s
 * @return {number}
 */

let s = "aeiaeia";
let s2 = "successes";
var maxFreqSum = function (s) {
  let hashMap = new Map();

  for (let i = 0; i < s.length; i += 2) {
    // first character
    if (hashMap.has(s[i])) {
      hashMap.set(s[i], hashMap.get(s[i]) + 1);
    } else {
      hashMap.set(s[i], 1);
    }

    // second character (if exists)
    if (i + 1 < s.length) {
      if (hashMap.has(s[i + 1])) {
        hashMap.set(s[i + 1], hashMap.get(s[i + 1]) + 1);
      } else {
        hashMap.set(s[i + 1], 1);
      }
    }
  }
  let largest = {
    Consonant: 0,
    Vowel: 0,
  };

  const vowels = new Set(["a", "e", "i", "o", "u"]);

  hashMap.forEach((val, key) => {
    console.log(key, val);
    if (vowels.has(key)) {
      largest.Vowel = Math.max(largest.Vowel, val);
    } else {
      // if (largest.Consonant < val) largest.Consonant = val;
      largest.Consonant = Math.max(largest.Consonant, val);
    }
  });

  console.log(largest);

  return largest.Consonant + largest.Vowel;
};

console.log(maxFreqSum(s));
console.log(maxFreqSum(s2));
