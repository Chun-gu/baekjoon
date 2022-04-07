const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const [a, b, c] = input;
const duplicatedAngle = input.filter(
  (elem, index, arr) => arr.indexOf(elem) !== index
);
if (a + b + c !== 180) {
  console.log("Error");
} else if (a === 60 && b === 60 && c === 60) {
  console.log("Equilateral");
} else if (a + b + c === 180 && duplicatedAngle.length === 1) {
  console.log("Isosceles");
} else if (a + b + c === 180 && duplicatedAngle.length === 0) {
  console.log("Scalene");
}
