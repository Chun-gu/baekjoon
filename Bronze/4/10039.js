const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const scores = input.map((score) => (score < 40 ? 40 : score));
const sum = scores.reduce((prev, curr) => prev + curr, 0);
console.log(parseInt(sum / 5));
