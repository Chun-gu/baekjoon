const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [day, cars] = input;
const illegals = cars.split(" ").filter((elem) => elem === day);
console.log(illegals.length);
