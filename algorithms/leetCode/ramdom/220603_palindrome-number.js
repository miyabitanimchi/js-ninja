// June 3 2022
// Palindrome Number
// https://leetcode.com/problems/palindrome-number/

const isPalindrome = (x) => {
  let isPalindrome = true;

  const stringArr = x.toString().split("");

  if (stringArr.length % 2 === 0) {
    const halfLength = stringArr.length / 2;
    for (let i = 0; i < halfLength; i++) {
      if (stringArr[i] === stringArr[stringArr.length - 1 - i]) {
        continue;
      } else {
        isPalindrome = false;
        return isPalindrome;
      }
    }
  }
  if (stringArr.length % 2 === 1) {
    const halfLength2 = (stringArr.length - 1) / 2;
    for (let i = 0; i < halfLength2; i++) {
      if (stringArr[i] === stringArr[stringArr.length - 1 - i]) {
        continue;
      } else {
        isPalindrome = false;
        return isPalindrome;
      }
    }
  }
  return isPalindrome;
};

console.log(isPalindrome(123454321));
console.log(isPalindrome(123421));

// Someone's good solution
const goodIsPalindrome = function (x) {
  let str = x.toString();

  // I didn't have to do loop twice but only once like this
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(goodIsPalindrome(10000201));
console.log(goodIsPalindrome(12321));

const goodIsPalindrome2 = function (x) {
  const reversedNumber = [...x.toString()].reverse().join("");
  const numberToString = x.toString();
  return reversedNumber === numberToString;
};
