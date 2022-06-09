// June 9 2022
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Two Sum II - Input Array Is Sorted

const twoSum = (numbers, target) => {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        result.push(i + 1);
        result.push(j + 1);
        return result;
      }
    }
  }
  return result;
};

console.log(twoSum([1, 2, 3, 7, 8, 10, 200], 203));
console.log(twoSum([-1, 0, 55, 73], 54));
console.log(twoSum([2, 7, 11, 15], 9));

// Another solution
var twoSum2 = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum < target) {
      console.log("target is greater than sum: " + sum);
      left += 1;
    } else if (sum > target) {
      console.log("sum is greater than target: " + sum);
      right -= 1;
    } else {
      return [left + 1, right + 1];
    }
  }
};
console.log(
  twoSum2(
    [1, 2, 3, 7, 8, 10, 13, 17, 35, 75, 83, 120, 140, 166, 169, 182, 200],
    150
  )
);
