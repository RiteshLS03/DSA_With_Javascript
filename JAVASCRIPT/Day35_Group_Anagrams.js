/**
 * @param {string[]} strs
 * @return {string[][]}
 */

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

var groupAnagrams = function (strs) {
  let hashMap = new Map();
  for (let i = 0; i < strs.length; i++) {
    let sortedWord = strs[i].split("").sort().join("");

    if (!hashMap.has(sortedWord)) {
      hashMap.set(sortedWord, [strs[i]]);
    } else {
      hashMap.get(sortedWord).push(strs[i]);
    }
  }
  let arr = [];
  hashMap.forEach((val) => arr.push(val));
  return arr;
};

console.log(groupAnagrams(strs));
