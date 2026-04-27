// let words = ["leet", "code"];
// let x = "e";

// var findWordsContaining = function (words, x) {
//   let arr = [];
//   for (let i = 0; i < words.length; i++) {
//     console.log(words[i]);
//     for (let j = 0; j < words[i].length; j++) {
//       console.log(words[i].length);
//       if (words[i][j] == x) {
//         console.log(words[i][j]);

//         if (!arr.includes(i)) {
//           arr.push(i);
// break; // 🔥 avoids extra checks

//         }
//       }
//     }
//   }
//   return arr;
// };

// console.log(findWordsContaining(words, x));
let words = ["leet", "code"];
let x = "e";

var findWordsContaining = function (words, x) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(findWordsContaining(words, x));
