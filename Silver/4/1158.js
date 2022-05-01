const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

const [n, k] = input;
const array = Array.from({ length: n }, (_, v) => v + 1);
const result = [];

function deleteOneByOne(array, ordinal, targetIndex) {
  index = targetIndex + k - 1;
  const length = array.length;
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
