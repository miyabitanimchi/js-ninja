/* JS closures / May 1st 2021 */


/* What is the reduce method? */
// The reduce() is a method to accumulate each element of an array, reduce them, 
// and  make it one value, and return the value.
// 隣り合う2つの配列要素に対して左から右へ同時に関数を適用し、単一の値にする。
// 配列データの各要素を累積して1つの値にする。


/* Syntax */
// array.reduce(function(accumulator, currentValue, currentIndex, sourceArr), initialValue)
// accumulator, currentValue... required
// currentIndex, sourceArr, initialValue... optional


/* How it works? */

// Basic syntax
let myArr = [10, 20, 30, 40, 50];
const result = myArr.reduce((accumulator, currentValue, currentIndex, sourceArr) => {
  // console.log(accumulator, currentValue, currentIndex, sourceArr);
  // 10 20 1 [ 10, 20, 30, 40, 50 ]
  // 30 30 2 [ 10, 20, 30, 40, 50 ]
  // 60 40 3 [ 10, 20, 30, 40, 50 ]
  // 100 50 4 [ 10, 20, 30, 40, 50 ]

  return accumulator + currentValue;
});
console.log(result); // 150



// with the initial value
let myArr2 = [10, 20, 30, 40, 50];
const result2 = myArr2.reduce((accumulator, currentValue, currentIndex, sourceArr) => {
  // console.log(accumulator, currentValue, currentIndex, sourceArr);
  // 100 10 0 [ 10, 20, 30, 40, 50 ]
  // 110 20 1 [ 10, 20, 30, 40, 50 ]
  // 130 30 2 [ 10, 20, 30, 40, 50 ]
  // 160 40 3 [ 10, 20, 30, 40, 50 ]
  // 200 50 4 [ 10, 20, 30, 40, 50 ]

  return accumulator + currentValue;
}, 100);
console.log(result2);



// with an object
let myObj = [
  {
    name: "coconut",
    type: "dog",
    age: 10
  },
  {
    name: "cinnamon",
    type: "cat",
    age: 3
  },
  {
    name: "miyabi",
    type: "human",
    age: 15
  }
];

const ageOnAverage = myObj.reduce((accumulator, currentValue, currentIndex, sourceArr) => {
  return accumulator + currentValue.age;
}, 0);

const result3 = Math.round(ageOnAverage / myObj.length);
console.log(result3);



// Removing duplicate items in an array
let arr = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let arrWithoutDuplicate = arr.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue)
  }
  return accumulator;
}, [])
console.log(arrWithoutDuplicate); // [ 'a', 'b', 'c', 'e', 'd' ]


// References:
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// w3schools: https://www.w3schools.com/jsref/jsref_reduce.asp
// SAMURAI ENGINEER Blog: 【JavaScript入門】初心者でも分かるreduce()の使い方とサンプル例まとめ
// https://www.sejuku.net/blog/69622
// Qiita: 【javascript】reduce
// https://qiita.com/chihiro/items/1047e40514a778c08baa

// Thank you for the great sources!