const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [hour, min] = input[0].split(" ").map(Number);
const requiredTime = Number(input[1]);

const addedMin = min + requiredTime;
if (addedMin < 59) {
  console.log(`${hour} ${addedMin}`);
} else {
  min = addedMin % 60;
  hour = hour + Math.floor(addedMin / 60);
  console.log(`${hour > 23 ? hour - 24 : hour} ${min}`);
}
