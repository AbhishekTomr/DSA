/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  for (let i = digits.length - 1; i > -1; i--) {
    if (digits[i] === 9 && carry) {
      digits[i] = 0;
    } else {
      digits[i] = digits[i] + carry;
      carry = 0;
    }
  }
  return carry === 1 ? [1, ...digits] : [...digits];
};

plusOne([1, 2, 3]);
