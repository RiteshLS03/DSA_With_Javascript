const s = ["R", "I", "T", "E", "S", "H", "M", "G", "E", "B", "Y"];

function reverseString(s) {
  //   if (s.length % 2 == 0) {
  // let mid = Math.floor(s.length / 2);
  // console.log(mid);
  let temp;
  for (let i = 0; i < s.length / 2; i++) {
    temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
    // Instead of doing all this swapping , we can just swap the i and (arr.lengh - 1) by just n-1-i
  }
  return s;
  //   } else {
  //     let mid = Math.floor(s.length / 2);
  //     console.log(mid);
  //     let temp,
  //       count = 1;
  //     for (let i = 0; i < mid; i++) {
  //       temp = s[i];
  //       s[i] = s[];
  //       s[s.length - count] = temp;
  //       count = count + 1;
  //     }
  //     return s;
  //   }
}

console.log(reverseString(s));
