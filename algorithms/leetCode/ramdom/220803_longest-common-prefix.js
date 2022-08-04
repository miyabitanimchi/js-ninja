// August 3 2022
// Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function(strs) {
    const strsLength = strs.length;
    const longestStrLength = Math.max(...(strs.map(str => str.length)));
    let prefix = [];
    let cmnPrefix = "";
    
    for (let i = 0; i < longestStrLength; i++) {
        prefix = [];
        for (let j = 0; j < strsLength; j++) {
            prefix.push(strs[j][i]);
        }
        if (prefix.every((letter) => letter === strs[0][i])) {
                cmnPrefix += strs[0][i]
        } else {
            break;
        }
    }
    return cmnPrefix;
};


// someone's good solution
const longestCommonPrefix2 = () => {
    let cmnPrefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) return cmnPrefix;
        }
        cmnPrefix += strs[0][i];
    }
    return cmnPrefix;
}