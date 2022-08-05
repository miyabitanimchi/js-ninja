// August 4 2022
// Shuffle String
// https://leetcode.com/problems/shuffle-string/

var restoreString = function(s, indices) {
    // const strArray = new Array(indices.length);
    const pair = indices.map((el, i) => { return { str: s[i], index: indices[i] }});
    const sortedStrs = pair.sort((a, b) => a.index - b.index)
    
    let sortedStr = "";
    sortedStrs.forEach((el) => sortedStr+= el.str);
    return sortedStr;
};

// someone's smart solution
var restoreString2 = function(s, indices) {
    let ordered = [];
    for ( let i=0; i< s.length; i++){
        ordered[indices[i]] = s[i];
        console.log(ordered);
    }
    return ordered.join('');
};

console.log(restoreString2("codeleet", [4,5,6,7,0,2,1,3]));