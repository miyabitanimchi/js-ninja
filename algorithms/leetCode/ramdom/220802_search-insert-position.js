// August 2 2022
// Search Insert Position
// https://leetcode.com/problems/search-insert-position/

var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) return i;
        if (target < nums[i + 1] && target > nums[i]) return i + 1;
        if (target > nums[nums.length - 1]) return nums.length;
        if (target < nums[0]) return 0;
    }
};

