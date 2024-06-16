var searchInsert = function (nums, target) {
  let indexFound = null;
  nums.forEach((item, index) => {
    if (indexFound !== null) return;
    if (item > target || item === target) {
      return (indexFound = index);
    }
  });
  return indexFound === null ? nums.length : indexFound;
};

searchInsert([1, 3, 5, 6], 0);
