var removeElement = function (nums, val) {
  const newArray = [];
  for (number of nums) {
    if (number !== val) {
      newArray.push(number);
    }
  }
  newArray.forEach((item, index) => {
    nums[index] = item;
  });
  return newArray.length;
};

removeElement([1, 2, 3, 3, 4], 3);
