let arr = [9, 6, 5, 3, 11, 13, 6, 15, 6, 15, 12, 8];

function sumOdd(n) {
  if (n == 0) {
    if (arr[n] % 2 !== 0) {
      return arr[n];
    } else return 0;
  } else {
    if (arr[n] % 2 !== 0) {
      return arr[n] + sumOdd(n - 1);
    } else {
      //   sumOdd(n - 1);
      return 0 + sumOdd(n - 1);
    }
  }
}

console.log(sumOdd(arr.length - 1));
