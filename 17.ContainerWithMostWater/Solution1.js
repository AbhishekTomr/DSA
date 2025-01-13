/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let sum = 0;
  while (i < j) {
    let newSum = Math.min(height[i], height[j]) * (j - i);
    if (newSum > sum) {
      sum = newSum;
    }
    height[i] > height[j] ? j-- : i++;
  }
  return sum;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
