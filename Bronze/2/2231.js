const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let generatorArr = [];
let start = input - input.toString().split("").map(Number).length * 9;
start = start < 0 ? 0 : start;

for (let i = start; i <= input - 1; i++) {
  const dividedSum =
    i +
    i
      .toString()
      .split("")
      .map(Number)
      .reduce((p, c) => p + c);

  if (input === dividedSum) {
    generatorArr.push(i);
  }
}
generatorArr.length > 0
  ? console.log("result", Math.min(...generatorArr))
  : console.log("result", 0);
