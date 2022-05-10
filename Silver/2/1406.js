const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [[...strings], count, ...commands] = input;
const left = strings;
const right = [];

for (let i = 0; i < count; i++) {
  const [command, value] = commands[i].split(" ");

  switch (command) {
    case "L":
      if (left.length) {
        right.push(left.pop());
      }
      break;
    case "D":
      if (right.length) {
        left.push(right.pop());
      }
      break;
    case "B":
      left.pop();
      break;
    case "P":
      left.push(value);
      break;
  }
}

let answer = left.join("");
answer += right.reverse().join("");
console.log(answer);
