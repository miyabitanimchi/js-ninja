// June 16 2022
// https://leetcode.com/problems/longest-palindromic-substring/
// Longest Palindromic Substring
// Solution from the link below, thank you so much
// https://leetcode.com/problems/longest-palindromic-substring/discuss/1022625/Javascript

var longestPalindrome = function (s) {
  //  const subStrings = [];
  // for (let i = 0; i < s.length; i++) {
  //     let p = '';
  //      for (let j = s.length -1; j >=i; j--) {
  //          if (s[i] === s[j]) {
  //              p+= s[i];
  //          } else if (s[i] !== s[s.length - 1 -i]) {
  //              p = p.substring(1);
  //          }
  //          if (j === s.length -1) {
  //              subStrings.push(p);
  //          }
  //      }
  // }
  //  console.log(subStrings);
  if (s.length < 2) return s;
  let max = "";
  for (let i = 0; i < s.length; i++) {
    let left = helper(i, i, s);
    let right = helper(i, i + 1, s);
    console.log(left, right);
    let currMax = left.length >= right.length ? left : right;
    max = currMax.length > max.length ? currMax : max;
  }

  return max;
};

function helper(left, right, s) {
  let curr = "";

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    curr = s.substring(left, right + 1);
    left -= 1;
    right += 1;
  }

  return curr;
}

console.log(longestPalindrome("babad"));
