// let n = 4;

// for (i = 0; i < n; i++) {
//   let row = "";
//   for (j = 0; j < i + 1; j++) {
//     row = row + (j + 1);
//   }
//   console.log(row);
// }

// Star pattern

// let n = 4;

// for (i = 0; i < n; i++) {
//   let row = "* ";
//   for (j = 0; j < i; j++) {
//     row = row + "* ";
//   }
//   console.log(row);
// }

// reverse star pattern

// n = 5;

// for (i = 0; i < n; i++) {
//   let row = "* ";
//   for (j = 0; j < n - 1; j++) {
//     row = row + "* ";
//   }
//   console.log(row);
// }

// n = 5;

// for (i = 0; i <= n; i++) {
//   let row = "";
//   for (j = 0; j < n - i; j++) {
//     row = row + (j + 1);
//   }
//   console.log(row);
// }

// let n = 5;

// for (i = 0; i < n; i++) {
//   let row = "";
//   // First loop to add the empty space in the row
//   for (j = 0; j < n - (i + 1); j++) {
//     row += " ";
//   }
//   for (k = 0; k < i + 1; k++) {
//     row += "*";
//   }
//   console.log(row);
// }
// Output : -
//     *
//    **
//   ***
//  ****
// *****

// let n = 5;

// for (i = 0; i < n; i++) {
//   let row = "",
//     switcher = 1;
//   for (j = 0; j < i + 1; j++) {
//     row = row + switcher;
//     if (switcher == 1) {
//       switcher = 0;
//     } else {
//       switcher = 1;
//     }
//   }
//   console.log(row);
// }

// Output : -
// 1
// 10
// 101
// 1010
// 10101

let n = 5;

let switcher = 1;
for (i = 0; i < n; i++) {
  let row = "";
  for (j = 0; j < i + 1; j++) {
    row = row + switcher;
    if (switcher == 1) {
      switcher = 0;
    } else {
      switcher = 1;
    }
  }
  console.log(row);
}
