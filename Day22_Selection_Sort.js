let arr = [
  654, 654, 65, 1, 653, 1, 5321, 653215, 41, 653, 241, 653, 210, 53, 210, 53210,
  32, 023, 0103, 052, 10,
];

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(insertionSort(arr));
