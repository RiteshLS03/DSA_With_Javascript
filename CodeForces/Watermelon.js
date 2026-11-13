const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();

const w = Number(input);

if (w % 2 === 0 && w > 2) {
  console.log("YES");
} else {
  console.log("NO");
}
