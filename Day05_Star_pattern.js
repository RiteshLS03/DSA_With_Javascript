// Let's write a program of the star pattern

// let n = 20;

// for (i = 0; i < n; i++) {
//   let row = " *";
//   for (j = 0; j < n; j++) {
//     // console.log(row);
//     row = row + " *";
//   }
//   console.log(row);
// }

// Increasing star pattern

// let n = 4;

// for (i = 0; i < n; i++) {
//   let row = "* OUTTER ";
//   for (j = 0; j < i; j++) {
//     // console.log("*");
//     row = row + "* INNER ";
//   }
//   console.log(row);
// }

// Increasing numbers in an row

// let n = 4;

// for (i = 0; i <= 4; i++) {
//   count = 1;
//   for (j = 0; j <= 4; j++) {
//     // count = j + i;
//     count = count + " " + count + j;
//   }
//   console.log(count);
// } //// FAILED ATTEMPT

// let n = 8;

// for (i = 0; i <= n; i++) {
//   row = "";
//   for (j = 0; j <= i; j++) {
//     row = row + (j + 1);
//     // row = row + (i + 1);
//   }
//   console.log(row);
// }

// for (let i = 0; i <= 4; i++) {
//   let row = "*";
//   for (let j = 0; j < i; j++) {
//     row = row + "*";
//   }

//   // row = " *";
//   console.log(row);
// }

// the funtion to find the second sum

// const arr = [5456, 4, 654, 1, 65, 1, 65, 1, 56, 16, 41, 5, 6];

// function findSecondSmallest(arr) {
//   let small = Infinity;
//   let secondSmall = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < small) {
//       secondSmall = small;
//       small = arr[i];
//     }
//   }
//   return { small, secondSmall };
// }

// console.log(findSecondSmallest(arr));
