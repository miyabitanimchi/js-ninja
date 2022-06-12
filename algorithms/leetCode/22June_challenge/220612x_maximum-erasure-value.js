// June 12 2022
// https://leetcode.com/problems/maximum-erasure-value/
// Maximum Erasure Value
// Solution from the links below, thank you so much
// https://dev.to/seanpgallivan/solution-maximum-erasure-value-1kod

// var maximumUniqueSubarray = function (nums) {
//   let end = nums.length - 1;
//   let start = 0;
//   let maxUniqueElements = [];
//   let potentialMaxScores = [];
//   let isChecked = true;

//   while (isChecked) {
//     for (let i = start; i < end - start; i++) {
//       if (maxUniqueElements[i] === undefined) {
//         maxUniqueElements.push(nums[i]);
//       } else if (maxUniqueElements[i - 1] !== maxUniqueElements[i]) {
//         maxUniqueElements.push(nums[i]);
//       } else if (maxUniqueElements[i - 1] !== maxUniqueElements[i]) {
//         const sum = maxUniqueElements.reduce((accum, cal) => accum + cal);
//         potentialMaxScores.push(sum);
//         start = nums.indexOf(maxUniqueElements[i]);
//         break;
//       }
//       if (start >= nums.length - 1) {
//         isChecked = false;
//       }
//     }
//     if (!isChecked) break;
//   }

//   return Math.max(...potentialMaxScores);
// };

// solution from the link
var maximumUniqueSubarray = function (nums) {
  let nmap = new Int8Array(10001),
    total = 0,
    best = 0;
  // nmap => [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0...];
  for (let left = 0, right = 0; right < nums.length; right++) {
    nmap[nums[right]]++, (total += nums[right]);
    while (nmap[nums[right]] > 1) nmap[nums[left]]--, (total -= nums[left++]);
    best = Math.max(best, total);
  }
  return best;
};

// one of good solutions on LeetCode

var maximumUniqueSubarray = function (nums) {
  let maxSum = 0;
  let nmap = new Int8Array(10001);
  let currentSum = 0;
  let tempSum = 0;
  let goBack = false;
  let prevJ = 0;

  for (let i = 0, j = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (!nmap[nums[i]]) {
      nmap[nums[i]] = 1;
    } else {
      tempSum = currentSum;
      goBack = true;
      prevJ = j;
    }

    while (goBack) {
      currentSum -= nums[j];
      if (nums[i] === nums[j]) {
        if (j === i) {
          currentSum = tempSum;
          j = prevJ;
        } else {
          j += 1;
        }
        goBack = false;
      } else {
        j++;
      }
    }

    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};
