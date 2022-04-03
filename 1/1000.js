const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((value) => +value);

input = [1, 2];
const [a, b] = input;
console.log(a + b);
