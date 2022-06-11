// June 11 2022
// https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
// Minimum Operations to Reduce X to Zero
// Solution from the links below, thank you so much
// https://pick8chu.github.io/minimum-operations-to-reduce-x-to-zero.html
// https://www.youtube.com/watch?v=3p2fBvxrVQA

//

// My code but it didin't work
// var minOperations = function(nums, x) {
//     if (Math.min(...nums) > x) return -1;

//     let repeatNum = x;
//     let optimalCountForLeft = 0;
//     let optimalCountForRight = 0;
//     let optimalCountForBoth = 0;
//     let leftSum = 0;
//     let rightSum = 0;
//     let bothSum = 0;
//     while (x >= 0) {
//         if (leftSum + nums[0] < x) {
//             leftSum += nums.shift();
//             optimalCountForLeft++;
//         } else if (leftSum + nums[0] > x) {
//             break;
//         } else if (leftSum + nums[0] === x) {
//             leftSum += nums.shift();
//             optimalCountForLeft++;
//             break
//         }

//         if (rightSum + nums[x-1] < x) {
//             rightSum += nums.pop();
//             optimalCountForRight++;
//         } else if (rightSum + nums[x-1] > x) {
//             break;
//         } else if (rightSum + nums[x-1] === x) {
//             leftSum += nums.pop();
//             optimalCountForRight++;
//             break;
//         }

//         repeatNum --;
//     }
//     if (leftSum === x) {
//         return optimalCountForLeft;
//     } else if (rightSum === x) {
//         return optimalCountForRight;
//     } else {
//         repeatNum = x;
//         while (repeatNum >= 0) {
//             if (nums[0] + nums[x - 1]< x) {
//                 bothSum = bothSum + nums.pop() + nums.shift();
//                 optimalCountForBoth+=2;
//             // } else if ((bothSum + nums[0]) > x
//             //            || (bothSum + nums[x - 1]) > x
//             //            || ((bothSum + nums[0] + nums[x - 1]) > x)
//             //           ) {
//             //     return -1;
//             } else if (bothSum + nums[0] === x) {
//                 nums.shift();
//                 optimalCountForBoth++;
//                 break;
//             } else if (bothSum + nums[x-1] === x) {
//                 nums.pop();
//                 optimalCountForBoth++;
//                 break;
//             }
//             else {
//                 optimalCountForBoth+=2;
//                 break;
//             }

//             repeatNum--;
//         }

//     }
//     return optimalCountForBoth;
// };

// this uses Sliding Wndow algorithm technique
var minOperations = function (nums, x) {
  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);
  const target = totalSum - x;
  let curSum = 0;

  if (target < 0) return -1;
  if (!target) return nums.length; // target === 0;

  let l = 0,
    r = 0;
  let maxLen = -Infinity;

  while (r <= nums.length) {
    curSum += nums[r];
    while (curSum > target) curSum -= nums[l++];
    if (curSum === target) maxLen = Math.max(r - l + 1, maxLen);
    r++;
  }

  return maxLen === -Infinity ? -1 : nums.length - maxLen;
};
