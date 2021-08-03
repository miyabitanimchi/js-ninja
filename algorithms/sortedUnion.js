// Aug 3 2021

// An algorithms from
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union



// Instruction
/* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

 */

// Solution 1
function uniteUnique(arr) {
  const args = [...arguments];
  console.log(args); // [ [ 1, 3, 2 ], [ 5, 2, 1, 4 ], [ 2, 1 ] ]
  const resultArr = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!resultArr.includes(args[i][j])) { // returns true/false
        resultArr.push(args[i][j]);
      }
    }
  }
  return resultArr;
}
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [5, 2, 1, 4, 10, 2, 0], [1]));


// Solution 2
const uniteUnique2 = (...arrs) => {
  console.log(...arrs); // [ 1, 2, 3 ] [ 1, 4, 5, 6, 2 ]
  const flatArr = [].concat(...arrs);
  console.log(flatArr); // [1, 2, 3, 1, 4, 5, 6, 2]
  console.log(new Set(flatArr)); // Set(6) { 1, 2, 3, 4, 5, 6 }
  return [...new Set(flatArr)];
}

console.log(uniteUnique2([1, 2, 3], [1, 4, 5, 6, 2])); // [ 1, 2, 3, 4, 5, 6 ]


// What is Set Object
/*
- It creates a new Set object.
- It iterates through the elements of a set in insertion order.
- Duplicated vlues con't be stored.
*/
