// Aug 5 2021

// An algorithm from 
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

function sumFibs(num) {
  let prevNum = 0;
  let currentNum = 1;
  let result = 0;
  while (currentNum <= num) {
    if (currentNum % 2 === 1) {
      result += currentNum;
    }
    currentNum += prevNum;
    prevNum = currentNum - prevNum;
  }
  return result;
}

sumFibs(4);