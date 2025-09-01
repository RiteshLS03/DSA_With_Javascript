const arr = [
  784585, 4564, 5, 41, 5, 241, 5332, 165, 321, 5, 3241, 53, 21, 52, 1, 53,
];

// Need to sort this array

function bubbleSort() {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        isSwapped = false;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}

console.log(bubbleSort(arr));
