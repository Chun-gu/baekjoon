const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [sang, joong, ha, cola, cider] = input;
const burgers = [sang, joong, ha];
const drinks = [cola, cider];
const cheapestBurger = burgers.sort((a, b) => a - b)[0];
const cheapestDrink = drinks.sort((a, b) => a - b)[0];
console.log(cheapestBurger + cheapestDrink - 50);
