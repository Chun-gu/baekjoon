const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [price, count, budget] = input;
const answer = price * count - budget;
console.log(answer < 0 ? 0 : answer);
