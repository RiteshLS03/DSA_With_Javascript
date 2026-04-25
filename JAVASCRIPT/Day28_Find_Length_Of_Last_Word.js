// const string = "   fly me   to   the moon  ";
// const string = "    Hello World asdf asfasd f asfafsdfss     ";
const string = " ffafsdfss ";
// const string = " ";

const lengthOfLast = (string) => {
  // string = string.trim(); // Told by the akshay

  let start = 0;
  let end = string.length - 1;

  while (start <= end && string[start] == " ") {
    start = start + 1;
  }

  while (end >= start && string[end] == " ") {
    end = end - 1;
  }
  console.log(start, end);
  string = string.slice(start, end + 1);
  console.log(string);
  //  console.log()
  console.log(string);
  let lastWordLengthCounter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      console.log(string[i], false);
      lastWordLengthCounter += 1;
      //   console.log("it's an alphabet");
    } else {
      console.log(string[i], true);
      lastWordLengthCounter = 0;
      //   console.log("it's an a space");
    }
  }
  return lastWordLengthCounter;
  //   return string.length;
};

console.log(lengthOfLast(string));

// let string = "fasdjfkjsdf afklasdf";
// string = string.slice(0, string.length - 1);
// console.log(string.slice(0, 1), { string: string });
