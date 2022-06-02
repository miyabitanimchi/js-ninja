// June 1 2022
//
// https://leetcode.com/problems/running-sum-of-1d-array/

// my solution
const runningSum = function (nums) {
  let runningSumsArr = [nums[0]];
  nums.reduce((accum, cv) => {
    runningSumsArr.push(accum + cv);
    return accum + cv;
  });
  return runningSumsArr;
};

console.log(runningSum([1, 2, 3, 4, 5]));

// someone's good solution with fast run time

const goodRunningSum = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    // nums[i] = nums[i] + nums[i - 1];
    nums[i] += nums[i - 1];
  }
  return nums;
};

console.log(goodRunningSum([1, 2, 3, 4, 5]));
