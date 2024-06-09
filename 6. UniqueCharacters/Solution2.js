var removeDuplicates = function (nums) {
  let uniqueNums = Array.from(new Set(nums));
  for (let i = 0; i < uniqueNums.length; i++) {
    nums[i] = uniqueNums[i];
  }
  return uniqueNums.length;
};
