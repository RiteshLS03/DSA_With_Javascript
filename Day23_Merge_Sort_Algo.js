function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = arr.length / 2;
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeSort(left, right);
}

console.log(mergeSort([465, 456, 31]));
