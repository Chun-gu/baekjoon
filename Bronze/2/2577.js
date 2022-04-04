const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

// const input = `150
// 266
// 427`
//   .toString()
//   .split("\n")
//   .map(Number);

const [A, B, C] = input;
const ABC = A * B * C;

const arr = ABC.toString().split("").map(Number);
for (i = 0; i < 10; i++) {
  const count = arr.filter((elem) => elem === i);
  console.log(count.length);
}
