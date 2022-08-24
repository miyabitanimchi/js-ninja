// August 24 2022
// Power of Four
// https://leetcode.com/problems/power-of-four/

var isPowerOfFour = function(n) {
    if (n === 1) return true;
    let num = 4;
    
    while (num <= n) {
        if (num === n) {
            return true;
        }
        num *= 4;
    }
    return false;
};

// another solution

var isPowerOfFour2 = function(n) {
    while (n > 0 && n % 4 === 0) {
        n /= 4;
    }
    return n === 1;
};