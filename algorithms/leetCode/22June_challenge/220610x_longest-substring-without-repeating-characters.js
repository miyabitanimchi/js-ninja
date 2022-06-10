// June 10 2022
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Remove Palindromic Subsequences

/* ********************** My solution which didn't work at all *********************** */
// var lengthOfLongestSubstring = function(s) {
//     const stringToArr = s.split("");
//     let longestStrBox = [];
//     let tempLongestStrBox = [];
//     for (let i = 0; i < stringToArr.length; i++) {
//         if (i === 0) longestStrBox.push(s[i]);
//         for (let j = i + 1; j < stringToArr.length - 1; j++) {
//             if (s[i] !== s[j] && !longestStrBox.includes(s[i])) {
//                 longestStrBox.push(s[i]);
//             } else if (longestStrBox.includes(s[i]) && s[i] !== s[j]) {
//                 tempLongestStrBox.push(s[i]);
//                 if (tempLongestStrBox.length >= longestStrBox.length) {
//                     longestStrBox = tempLongestStrBox;
//                     tempLongestStrBox = [];
//                 }
//             }
//         }
//     }
//     console.log(longestStrBox);
//     return longestStrBox.length;
// };

// I followed their video for the solution : https://www.youtube.com/watch?v=w-dBC1n_4ZA
// Thank you!

// "abcabcbb"
var lengthOfLongestSubstring = function (s) {
  let map = {};
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    let lastChar = s[end]; // loop 1: a, loop 2: b, loop 3: c, loop 4: a ...
    if (map[lastChar] === undefined) map[lastChar] = 0; // loop 4 map["a"] === 1, so skip it
    map[lastChar] += 1; // loop 4: map[lastChar] = 1 + 1 = 2
    console.log("in for loop");
    console.log(map); // loop 1: { a: 1 }, loop 2: { a: 1, b: 1 }, loop 3: { a: 1, b: 1, c: 1 }, loop 4: { a: 2, b: 1, c: 1}
    while (map[lastChar] > 1) {
      // loop 4: 2
      // map[lastChar] => loop 1: 1, loop 2: 1, loop 3: 1, loop 4: 2
      let firstChar = s[start]; // loop 4: a
      map[firstChar] -= 1; // loop 4: map[lastChar] = 2 - 1 = 1
      start += 1; // loop 4: 2
      console.log(`start: ${start}`);
      console.log("in for and while loop");
      console.log(map);
    }
    maxLength = Math.max(maxLength, end - start + 1); //loop 1: max(0, 1) => 1, loop 4: max(3, 3 -1 + 1) => 3
    console.log(`maxLength: ${maxLength}, end: ${end}, start: ${start}`);
    console.log(maxLength);
  }
  return maxLength;
};

// the stdout when passing "abcabcbb"
// in for loop
// { a: 1 }
// maxLength: 1, end: 0, start: 0
// maxLength: 1
// in for loop
// { a: 1, b: 1 }
// maxLength: 2, end: 1, start: 0
// maxLength: 2
// in for loop
// { a: 1, b: 1, c: 1 }
// maxLength: 3, end: 2, start: 0
// maxLength: 3
// in for loop
// { a: 2, b: 1, c: 1 }
//
// start: 1
// in for and while loop
// { a: 1, b: 1, c: 1 }
// maxLength: 3, end: 3, start: 1
// maxLength: 3
// in for loop
// { a: 1, b: 2, c: 1 }
// start: 2
// in for and while loop
// { a: 1, b: 1, c: 1 }
// maxLength: 3, end: 4, start: 2
// maxLength: 3
// in for loop
// { a: 1, b: 1, c: 2 }
// start: 3
// in for and while loop
// { a: 1, b: 1, c: 1 }
// maxLength: 3, end: 5, start: 3
// maxLength: 3
// in for loop
// { a: 1, b: 2, c: 1 }
// start: 4
// in for and while loop
// { a: 0, b: 2, c: 1 }
// start: 5
// in for and while loop
// { a: 0, b: 1, c: 1 }
// maxLength: 3, end: 6, start: 5
// maxLength: 3
// in for loop
// { a: 0, b: 2, c: 1 }
// start: 6
// in for and while loop
// { a: 0, b: 2, c: 0 }
// start: 7
// in for and while loop
// { a: 0, b: 1, c: 0 }
// maxLength: 3, end: 7, start: 7
// maxLength: 3
