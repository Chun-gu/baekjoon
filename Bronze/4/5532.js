const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [l, a, b, c, d] = input;

const k = a % c === 0 ? a / c : Math.floor(a / c) + 1;
const m = b % d === 0 ? b / d : Math.floor(b / d) + 1;

if (k > m) {
  console.log(l - k);
} else {
  console.log(l - m);
}
