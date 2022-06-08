// June 8 2022
// https://leetcode.com/problems/remove-palindromic-subsequences/
// Remove Palindromic Subsequences

var removePalindromeSub = function(s) {  
  if (s === s.split("").reverse().join("")) return 1;
  
  if (s === '') return 0;
  
  return 2;
};

console.log(removePalindromeSub("aabbaa"));
console.log(removePalindromeSub("aaabbbaaaaaa"));
console.log(removePalindromeSub("bb"));