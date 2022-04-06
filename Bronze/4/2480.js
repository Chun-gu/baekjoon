const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

const dice = new Set(input);
switch (dice.size) {
  case 1:
    console.log(10000 + [...dice][0] * 1000);
    break;
  case 2:
    const duplicatedNum = input.filter(
      (elem, index, arr) => arr.indexOf(elem) !== index
    );
    console.log(1000 + [duplicatedNum][0] * 100);
    break;
  case 3:
    console.log([...dice][0] * 100);
    break;
  default:
    break;
}
