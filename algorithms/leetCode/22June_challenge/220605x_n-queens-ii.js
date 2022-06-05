// June 4 2022
// N-Queens II
// https://leetcode.com/problems/n-queens-ii/

var totalNQueens = function (n) {
  let result = [];
  let board = Array.from({ length: n }, () => new Array(n).fill("."));
  // if n is 4, this will create...
  // [['.', '.', '.', '.'], ['.', '.', '.', '.'], ['.', '.', '.', '.'], ['.', '.', '.', '.']]
  let col = new Set();
  let posD = new Set();
  let negD = new Set();

  const generate = (r) => {
    if (r === n) {
      let ans = [];
      // console.log(board);
      for (let row of board) {
        ans.push(row.join(""));
      }
      result.push(ans);
      // console.log("here");
      return;
    }

    for (let c = 0; c < n; c++) {
      if (col.has(c) || posD.has(r + c) || negD.has(r - c)) {
        continue;
      }

      col.add(c);
      posD.add(r + c);
      negD.add(r - c);
      board[r][c] = "Q";

      generate(r + 1);
      col.delete(c);
      posD.delete(r + c);
      negD.delete(r - c);
      board[r][c] = ".";
    }
  };

  generate(0);
  return result.length;
};

console.log(totalNQueens(4));
