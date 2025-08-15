const arr = [2, 4, 11, 1, , 19, 20];

function search(SElement) {
  for (i = 0; i < arr.length; i++) {
    if (SElement == arr[i]) return i;
  }
}

console.log(search(1));
