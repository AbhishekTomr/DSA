/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  let min = 0;
  let max = nums.length - 1;
  let mid = -1;
  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    if (nums[mid] === target) return mid;
    // check for contineousSide
    let isRightSideContineous = nums[mid] <= nums[max];
    if (isRightSideContineous) {
      target > nums[mid] && target <= nums[max]
        ? (min = mid + 1)
        : (max = mid - 1);
    } else {
      target >= nums[min] && target < nums[mid]
        ? (max = mid - 1)
        : (min = mid + 1);
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8));
