const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [Minguk, Manse] = input;
Minguk = Minguk.split(" ")
  .map(Number)
  .reduce((a, b) => a + b);
Manse = Manse.split(" ")
  .map(Number)
  .reduce((a, b) => a + b);

console.log(Minguk >= Manse ? Minguk : Manse);
