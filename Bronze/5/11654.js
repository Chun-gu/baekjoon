const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const answer = input.charCodeAt(0);
console.log(answer);
