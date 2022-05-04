// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = `9 23
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBW`;

const [NM, ...rest] = input.toString().split("\n");
const [columns, rows] = NM.split(" ").map(Number);
const wrongArr = rest.join("").split("");
const colors = ["B", "W"];

function makeChessboard(columns, rows, flag) {
  const arr = [];
  for (let i = flag; i < rows + flag; i++) {
    if (i % 2 !== 0) {
      for (let j = flag; j < columns + flag; j++) {
        if (j % 2 !== 0) {
          arr.push(colors[flag]);
        } else {
          arr.push(colors[Math.abs(flag - 1)]);
        }
      }
    } else {
      for (let j = flag; j < columns + flag; j++) {
        if (j % 2 === 0) {
          arr.push(colors[flag]);
        } else {
          arr.push(colors[Math.abs(flag - 1)]);
        }
      }
    }
  }
  return arr;
}

const B_Arr = makeChessboard(columns, rows, 0);
const W_Arr = makeChessboard(columns, rows, 1);

function countDiff(wrongArr, rightArr) {
  let diff = 0;
  for (i = 0; i < wrongArr.length; i++) {
    if (wrongArr[i] !== rightArr[i]) {
      diff++;
    }
  }
  return diff;
}
console.log(wrongArr);
console.log(W_Arr);
console.log(B_Arr);

console.log(countDiff(wrongArr, B_Arr));
console.log(countDiff(wrongArr, W_Arr));
