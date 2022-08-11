// August 10 2022
// Reverse String
// https://leetcode.com/problems/reverse-string/

var reverseString = function(s) {
    return s.reverse().join("").split("");
};

// someone's good solution
var reverseString2 = function(s) {
    const sizeLoop = Math.floor(s.length / 2);
    for (let i = 0; i < sizeLoop; i++) {
        [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]]
        // ["h", "o"] = ["o", "h"]
        // ["e", "l"] = ["l", "e"]
    }
    return s;
};

// another solution
var reverseString3 = function(s) {
   var i = 0
    var j = s.length - 1
    
    while (i < j){
       // swap
       var first = s[i] // first = "h"
       s[i] = s[j] // ["o", "e", "l", "l", "o"]
       s[j] = first // ["o", "e", "l", "l", "h"]
        
        i++
        j--
    }
};

console.log(reverseString2(["h","e","l","l","o"]));