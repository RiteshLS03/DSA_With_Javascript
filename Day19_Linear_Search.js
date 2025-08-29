const arr = [
  5,
  4,
  6,
  5,
  456,
  1,
  65,
  1,
  653,
  1,
  531,
  65,
  32,
  165,
  31520,
  ,
  45,
  465,
  1,
  53,
];

function LinearSearch(target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return ++i;
    }
  }
  return -1;
}

console.log(LinearSearch(456));
