const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

const [n, k] = input;
// https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
const array = Array.from({ length: n }, (_, v) => v + 1);
const result = [];

function deleteOneByOne(array, ordinal, targetIndex) {
  index = targetIndex + ordinal - 1;
  const length = array.length;
  // https://dev.to/turneremma21/circular-access-of-array-in-javascript-j52
  targetIndex = ((index % length) + length) % length;
  const deletedNum = array[targetIndex];
  result.push(deletedNum);
  array = array.filter((elem) => elem !== deletedNum);

  if (array.length === 0) {
    return result;
  } else {
    targetIndex = ((index % length) + length) % length;
    deleteOneByOne(array, ordinal, targetIndex);
  }
}

deleteOneByOne(array, k, 0);

console.log(`<${result.join(", ")}>`);
