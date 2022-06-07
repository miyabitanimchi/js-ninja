// June 7 2022
// https://leetcode.com/problems/merge-sorted-array/
// Merge Sorted Array

// My solution  ... no good
const merge = (nums1, m, nums2, n) => {
  nums1.splice(nums1.length - n);
  mergedArr = [...nums1, ...nums2];
  const ascArr = mergedArr.sort((a, b) => {
    return a - b;
  });
  const diff = mergedArr.length - (m + n);
  ascArr.splice(0, diff);
  console.log(ascArr);
  for (let i = 0; i < ascArr.length; i++) {
    nums1[i] = ascArr[i];
  }
};

// one of someones good solutions
const merge2 = (nums1, m, nums2, n) => {
  while (n > 0) {
    //if val in nums1 is greater than val in nums2, use nums1
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    }
    //otherwise use nums2 val
    else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }
};

// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// nums1 = [1], m = 1, nums2 = [], n = 0
// Output; [1]

// nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
