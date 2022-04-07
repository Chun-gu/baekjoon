const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [n, m] = input;
console.log(Math.abs(n - m));
