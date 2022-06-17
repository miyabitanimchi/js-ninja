// June 16 2022
// Single Number
// https://leetcode.com/problems/single-number/

var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];

  for (let i = 0; i < nums.length; i++) {
    const filter = nums.filter((num) => num === nums[i]);
    if (filter.length === 1) return nums[i];
  }

  return null;
};

// other's solution

// var singleNumber = function(nums) {

//    var output=0;
//     for(let i=0;i<nums.length;i++){
//         // / console.log(output,nums[i],output^nums[i])
//          output=output^nums[i]
//     }
//     return output;

// };

// ^ ... Bitwise XOR
