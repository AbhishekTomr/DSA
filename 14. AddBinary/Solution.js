/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let carry = 0;
  const num1 = a.split("").map((num) => parseInt(num));
  const num2 = b.split("").map((num) => parseInt(num));
  const { bigNum, smallNum, diff } =
    num1.length > num2.length
      ? { bigNum: num1, smallNum: num2, diff: num1.length - num2.length }
      : { bigNum: num2, smallNum: num1, diff: num2.length - num1.length };
  for (let i = 0; i < diff; i++) {
    smallNum.unshift(0);
  }
  const sumArray = [];
  for (let i = bigNum.length - 1; i > -1; i--) {
    let sum = bigNum[i] + smallNum[i] + carry; //sum the number 00,01,11
    carry = 0;
    if (sum > 1) {
      sum = sum % 2; //0,1,2,3 0,1,0(1),1(1)
      carry = 1;
    }
    sumArray.unshift(sum);
  }
  if (carry) sumArray.unshift(1);
  return sumArray.join("");
};
