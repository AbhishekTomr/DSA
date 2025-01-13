/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const numCounts = {};
var threeSum = function (nums) {
  if (nums.length < 3) return [];
  if (nums.length === 3) {
    const sum = nums.reduce((sum, next) => {
      return sum + next;
    }, 0);
    return sum === 0 ? [nums] : [];
  }
  //sort the array in accending order
  nums.sort((a, b) => a - b);
  console.log("sorted array", nums);
  const result = [];
  let i = 0;
  let j = nums.length - 1;
  while (j > i) {
    let diff = nums[i] + nums[j];
    if (diff !== 0) {
      diff = -1 * diff;
    }
    let slice = nums.slice(i + 1, j);
    console.log(
      "i am here",
      nums[i],
      nums[j],
      diff,
      "slice",
      slice,
      slice.indexOf(diff)
    );
    if (
      slice.indexOf(diff) != -1 &&
      !numCounts[`${nums[i]}${diff}${nums[j]}`]
    ) {
      numCounts[`${nums[i]}${diff}${nums[j]}`] = 1;
      result.push([nums[i], diff, nums[j]]);
      console.log("pushing", [nums[i], diff, nums[j]]);
    }
    Math.abs(nums[i]) > Math.abs(nums[j]) ? i++ : j--;
  }
  console.log("result", result);
  return result;
};

threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
-1, 0, 0, 1;
//input - [-1,0,1,2,-1,-4]
// [-4,-1,-1,0,1,2] //-2
//output - [[-1,-1,2],[-1,0,1]]
