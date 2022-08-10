// August 9 2022
// Length of Last Word
// https://leetcode.com/problems/length-of-last-word

var lengthOfLastWord = function(s) {
    const trimWords = s.trim();
    let count = 0;
    for (let i = trimWords.length - 1; i >= 0; i--) {
        if (trimWords[i] !== " ") {
            count += 1;
        } else {
            break;
        }
    }
    return count;
};
