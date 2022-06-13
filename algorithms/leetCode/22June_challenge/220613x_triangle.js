// June 13 2022
// https://leetcode.com/problems/triangle/
// Triangle

var minimumTotal = function (triangle) {
  const len = triangle.length; // 4

  const minArr = triangle[len - 1]; // [4,1,8,3]
  for (let i = len - 2; i >= 0; i--) {
    // i = 2 ... loop 2, 1, 0
    for (let j = 0; j <= i; j++) {
      // 0, 1
      minArr[j] = Math.min(minArr[j], minArr[j + 1]) + triangle[i][j];
      // first loop ... minArr[0] = Math.min(4, 1)... 1 + triangle[2][0]...6 = 7, [7,1,8,3]
      // second ... minArr[1] = Math.min(1, 8) ... 1 + triangle[2][1]... 5 = 6, [7,6,8,3]
      // third ... minArr[2] = Math.min(8, 3) ... 3 + triangle[2][2]... 7 = 10, [7,6,10,3]
      // forth ... minArr[0] = Math.min(7, 6) ... 6 + triangle[1][0]... 3 = 10, [9,6,10,3]
      // fifth ... minArr[1] = Math.min(6, 10) ...6 + triangle[1][1]... 4 = 10, [9,10,10,3]
      // sixth ... minArr[0] = Math.min(9, 10) ... 9 + triangle[0][0] ... 2 = 11 [11,10,10,3]
    }
  }

  return minArr[0];
};
