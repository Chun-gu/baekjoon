const input = [
  "4",
  "10 15 20 25",
  "2",
  "3 10",
  "2 20",
  "0",
  "1",
  "4 10",
  "1",
  "1 10",
];

// input[0]만큼 반복하면서
// input[1]을 각 객체의 price로 넣어주고
// input[2]

const potions = [
  { price: 10, discount: [{ 2: 10 }, { 1: 20 }] },
  { price: 15, discount: [] },
  { price: 20, discount: [{ 3: 10 }] },
  { price: 25, discount: [{ 0: 10 }] },
];
console.log(potions[0]);

getDiscountCapibilities(potions);
// 전체 포션 N개에 대해 각 포션의 최대할인가를 배열로 만들어 반환하는 함수
function getDiscountCapibilities(potions) {
  // console.log("potions", potions);
  const discountCapibilities = [];
  for (i = 0; i < 4; i++) {
    const discountCapibility = getDiscountCapibility(potions[i]);
    discountCapibilities.push(discountCapibility);
  }
  return discountCapibilities;
}

function getDiscountCapibility(potion) {
  console.log("potion", potion.discount.length);
  for (i = 0; i < 1; i++) {
    const discountedPrice = potion.price - potions[0].discount;
  }
}
// 최대할인가 배열에서 값이 가장 큰 요소를 제거하면서
// discount에 기록된 값만큼 해당 potion의 price를 수정하고
// totalCost에 제거된 요소의 price를 더함.
// 수정된 potions 배열을 이용해서 다시 최대할인가 배열을 반환
// potions[0]의 최대 할인가
// console.log(
//   potions[2].price -
//     potions[0].discount[2] +
//     (potions[1].price - potions[0].discount[1]) -
//     potions[0].price
// );
