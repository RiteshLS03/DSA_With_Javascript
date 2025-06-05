// const arr = [
//   4, 5, 1, 62, 5, 5, 2, 5, 56, 52, 565, 62465, 652, 65, 6531, 65, 26, 5684, 53,
//   84651, 68451, 6451, 465, 61, 456134, 65346, 51, 4563, 6513, 4563, 4653, 4651,
//   65, 54656, 56,
// ];

// // const num = 4653;
// function searchAndReturnIndex(num) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(searchAndReturnIndex(44444444444));

//////////////// SECOND Question to find the number of the negative number in the array

// const mixedArray = [12, -5, 7, -32, 0, 18, -11, 25, -3, 6];

// function countOfTheNegativeNumbers() {
//   let negCount = 0;
//   for (i = 0; i < mixedArray.length; i++) {
//     if (mixedArray[i] < 0) {
//       negCount++;
//     }
//   }
//   return negCount;
// }

// console.log(countOfTheNegativeNumbers());

/////////////// THIRD Question to find the largest amount from an Array

// const randomArray = Array.from({ length: 10 }, () =>
//   Math.floor(Math.random() * 101)
// );
// console.log(randomArray);

// function findTheLargestNum() {
//   let counter = -Infinity;
//   for (i = 0; i < randomArray.length; i++) {
//     if (counter < randomArray[i]) {
//       counter = randomArray[i];
//     }
//   }
//   return counter;
// }

// console.log(findTheLargestNum(), "The largest number from an array");

const randomArray2 = Array.from(
  { length: 10 },
  () => Math.floor(Math.random() * 201) - 100
);
console.log(randomArray2);

function findTheLargestNum() {
  let counter = Infinity;
  for (i = 0; i < randomArray2.length; i++) {
    if (counter > randomArray2[i]) {
      counter = randomArray2[i];
    }
  }
  return counter;
}

console.log(findTheLargestNum(), "The Smallest number from an array");
