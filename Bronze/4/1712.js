const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

const [A, B, C] = input;
const margin = C - B;
const count = Math.floor(A / margin) + 1;

console.log(margin <= 0 ? -1 : count);
