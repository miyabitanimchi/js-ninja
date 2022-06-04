// June 3 2022
// Range Sum Query 2D - Immutable
// https://leetcode.com/problems/range-sum-query-2d-immutable/
// * Not solved by myself

const NumMatrix = function (matrix) {
  this.matrix = matrix;
};

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0;

  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      sum += this.matrix[i][j];
    }
  }
  return sum;
};

const matrix = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);
const rangeSum1 = matrix.sumRegion(2, 1, 4, 3);
// 2 + 0 + 1 + 1 + 0 + 1 + 0 + 3 + 0
const rangeSum2 = matrix.sumRegion(0, 0, 4, 4);
const rangeSum3 = matrix.sumRegion(0, 0, 0, 0);

console.log(rangeSum1);
console.log(rangeSum2);
console.log(rangeSum3);
