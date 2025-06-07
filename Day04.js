// Find the second largest number from an array ?

// const arr = [
//   4, 51, 41, 51, 265, 3265, 156, 1325, 24, 156, 3, 5312, 6532, 4532, 5, 3265,
//   3264, 53126, 5326532, 45312, 532, 532, 531265132, 651, 32, 651320, 65126,
//   54132, 56132, 645, 325, 632, 456132, 54, 612, 6541230.46523165132, 5632,
// ];

// const secondLargest = () => {};

// for (i = 0; i < 3; i++) {
//   for (j = 0; j < i; j++) {
//     console.log(" i=" + i + " j=" + j);
//   }
// }

// for (i = 0; i <= 5; i++) {
//   for (j = 0; j <= i; j++) {
//     console.log(" i=" + i + " j=" + j);
//   }
// }

// Another reverse code
// for (i = 0; i < 3; i++) {
//   for (j = i; j > 0; j--) {
//     console.log("j=", j, " i=", i);
//   }
// }

//o/p of above code
// 11
// 22
// 12

for (i = 5; i > 0; i--) {
  for (j = 0; j < i; j++) {
    console.log(i, j);
  }
}
