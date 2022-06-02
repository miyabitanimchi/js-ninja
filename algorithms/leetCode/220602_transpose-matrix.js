// June 2 2022
// Transpose Matrix
// https://leetcode.com/problems/transpose-matrix/

// My solution
const transpose = (matrix) => {
  let arr = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let arr2 = [];
    for (let j = 0; j < matrix.length; j++) {
      arr2.push(matrix[j][i]);
    }
    arr.push(arr2);
  }
  return arr;
};
