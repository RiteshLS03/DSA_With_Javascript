// function fun1(n) {
//   if (n > 0) {
//     console.log(n);
//     fun1(n - 1);
//   }
// }

// console.log(fun1(3));

function fun1(n) {
  if (n > 0) {
    fun1(n - 1);
    console.log(n);
  }
}

fun1(3);
