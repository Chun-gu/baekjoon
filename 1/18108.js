const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((value) => +value);
  
const answer = input - 543;
console.log(answer);
