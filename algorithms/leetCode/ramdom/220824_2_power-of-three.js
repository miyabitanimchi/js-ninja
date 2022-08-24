// August 24 2022
// Power of Three
// https://leetcode.com/problems/power-of-three/

var isPowerOfThree = function(n) {
    if (n === 1) return true;
    
    let num = 3;
    while (num <= n) {
        if (num === n) {
            return true;
        }
        num *= 3;
    }
    return false;
};