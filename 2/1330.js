const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((value) => +value);

const [A, B] = input;
if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else {
  console.log("==");
}
