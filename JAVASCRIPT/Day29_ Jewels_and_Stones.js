// /**
//  * @param {string} jewels
//  * @param {string} stones
//  * @return {number}
//  */

// let jewels = "aA",
//   stones = "aAAbbbb";

// var numJewelsInStones = function (jewels, stones) {
//   counter = 0;
//   for (let i = 0; i < jewels.length; i++) {
//     for (let j = 0; j < stones.length; j++) {
//       if (jewels[i] == stones[j]) {
//         counter = counter + 1;
//       }
//     }
//   }

//   return counter;
// };

// console.log(numJewelsInStones(jewels, stones));
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

let jewels = "aA",
  stones = "aAAbbbb";

var numJewelsInStones = function (jewels, stones) {
  let counter = 0;
  let hashMap = new Map();

  for (let i = 0; i < stones.length; i++) {
    if (hashMap.has(stones[i])) {
      hashMap.set(stones[i], hashMap.get(stones[i]) + 1);
    } else {
      hashMap.set(stones[i], 1);
    }
  }

  hashMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
    if (jewels.includes(key)) {
      counter += hashMap.get(key);
    }
  });

  return counter;
};

console.log(numJewelsInStones(jewels, stones));
