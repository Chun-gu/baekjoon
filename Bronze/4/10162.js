const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim() * 1;

const A = 300;
const B = 60;
const C = 10;
const answer = [];

if (input % C) {
  console.log(-1);
} else if (input < B) {
  answer.push(0);
  answer.push(0);
  answer.push(input / C);
} else if (input < A) {
  answer.push(0);
  answer.push(Math.floor(input / B));
  answer.push((input % B) / C);
} else if (input >= A) {
  answer.push(Math.floor(input / A));
  answer.push(Math.floor((input % A) / B));
  answer.push(((input % A) % B) / C);
}
console.log(answer.toString().replaceAll(",", " "));
