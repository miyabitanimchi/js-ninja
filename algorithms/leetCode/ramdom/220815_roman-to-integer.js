// August 15 2022
// Roman to Integer
// https://leetcode.com/problems/roman-to-integer/

const converter = (roman) => {
    switch(roman) {
        case "I":
            return 1;
            break;
        case "V":
            return 5;
            break;
        case "X":
            return 10;
            break;
        case "L":
            return 50;
            break;
        case "C":
            return 100;
            break;
        case "D":
            return 500;
            break;
        case "M":
            return 1000;
            break;
        default:
            return 0;
    }
}
var romanToInt = function(s) {
    const romanArr = s.split("");
    console.log(romanArr);
    let count = 0;
    let numsArr = [];
    
    romanArr.forEach((roman, i) => {
        numsArr.push(converter(s[i]));
    })
   
    for (let i = 0; i < numsArr.length; i++) {
        if (numsArr[i] < numsArr[i + 1] && numsArr[i + 1]) {
            count = count + (numsArr[i] * -1); // ?? can be just count -= numsArr[i]; ? lol
        } else {
            count += numsArr[i];
        }
    }
    console.log(numsArr);
    console.log(count);
    return count;
};

// someone's solution

const romanToInt = (s) => {
    // make an obj instead of switch
    const symbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;
    for (let index = 0; index < s.length; index++) {
        s[index + 1] && symbols[s[index]] < symbols[s[index + 1]]
        ? (result -= symbols[s[index]])
        : (result += symbols[s[index]]);
    }

    return result;
};