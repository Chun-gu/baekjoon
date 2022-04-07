const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const startTime = input[0].split(" ").map(Number);
let [startHour, startMin, startSec] = startTime;
let requiredTime = +input[1];

startSec += requiredTime;

while (startSec >= 60) {
  startMin++;
  startSec -= 60;
}
while (startMin >= 60) {
  startHour++;
  startMin -= 60;
}
while (startHour >= 24) {
  startHour -= 24;
}

console.log(`${startHour} ${startMin} ${startSec}`);
