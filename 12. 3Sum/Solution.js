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
};

threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
// -1, 0, 0, 1;
//input - [-1,0,1,2,-1,-4]
// [-4,-1,-1,0,1,2] //-2
//output - [[-1,-1,2],[-1,0,1]]

// i think this one is not solved yet
