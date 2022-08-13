// August 12 2022
// Move Zeroes
// https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] === 0 && nums[j] !== 0) {
                let temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
            }
        }
    }
};