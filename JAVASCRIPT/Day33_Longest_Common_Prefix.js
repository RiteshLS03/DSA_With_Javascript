// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function (strs) {
//   let commonPrefix = strs[0]; // no need to split

//   for (let i = 1; i < strs.length; i++) {
//     let j = 0;

//     // compare safely within both lengths
//     while (
//       j < commonPrefix.length &&
//       j < strs[i].length &&
//       commonPrefix[j] === strs[i][j]
//     ) {
//       j++;
//     }

//     // update prefix instead of returning early
//     commonPrefix = commonPrefix.slice(0, j);

//     // early exit if empty
//     if (commonPrefix === "") return "";
//   }

//   return commonPrefix; // final return added
// };
