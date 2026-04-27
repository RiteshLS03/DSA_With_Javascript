/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  const hashMap = new Map();

  hashMap.set("a", 0);
  hashMap.set("e", 0);
  hashMap.set("i", 0);
  hashMap.set("o", 0);
  hashMap.set("u", 0);

  hashMap.forEach((val, key) => console.log({ key: key, val: val }));
  hashMap.forEach((val, key) => console.log({ key: key, val: val }));
};
