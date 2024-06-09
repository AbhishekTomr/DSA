var removeDuplicates = function (nums) {
  const uniqueChars = {};
  const uniqueArray = [];
  nums.forEach((item, index) => {
    if (!uniqueChars[item]) {
      uniqueChars[item] = true;
      uniqueArray.push(item);
    }
  });
  for (let i = 0; i < uniqueArray.length; i++) {
    nums[i] = uniqueArray[i];
  }
  return uniqueArray.length;
};

removeDuplicates([1, 1, 2]);
