const arr = [
  11, 45, 1,

  5, 1, 5, 1, 5, 1, 5, 12, 15, 2, 54, 2, 4, 5, 45, 21, 5451,

  51, 51, 21, 21, 54, 51, 21, 5, 65,
];

const fun = (arr) => {
  let biggest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
  }

  return biggest;
};

console.log(fun(arr));
