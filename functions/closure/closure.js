/* JS closures / April 26th 2021 */


/* Firstly... the points to understand closures */
// • JS allows us to define functions in a function
//   JSは関数の中に関数を定義できる
// • Functions in JS allow us to use a function in a different place 
//   as assigning it to a variable
//   JSの関数は変数として持ち運ぶことができる
// • Functions in JS allow us to use a variable from a parent's function into a child's function
//   JSの関数は親の関数の変数を使用できる
// • In JS, the parent's function of the child's functions is NOT one which the child is called in,
//   but the parent which the child is defined in. (static(lexical) scope)
//   In other words, the scope is determined where the child function is DEFINED.
//   JSの関数の親とは産みの親のことである。
// 　*　Dynamic scope... The scope is determined where the child function is CALLED.



/* Q: What are closures in JS? */
// A: "A closure is the combination of a function bundled together (enclosed) with references 
//    to its surrounding state (the lexical environment)." 
//    by MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// A: 関数と、産みの親(と祖先全員)が持っている変数の組み合わせ(レキシカル環境)をクロージャと呼ぶ。




// (Lexical scope)
var x = 100;
function testA() { // The scope of x is determined when testA() function is defined, and it keeps the scope.

  console.log(x);
}

function testB() {
  var x = 200; // Even though x is redefined, testA() still keeps the global variable x.
  testA();
}

console.log(testA()); // 100
console.log(testB()); // 100




/* How closures work */
function funcA() {
  var foo = "foo!";
  console.log(foo); // This is executed by funcA() from "var myFunc = funcA()"

  function funcB() {
    alert(foo);
  }
  return funcB;  // closure, this will be assigned to the global variable below
}

var myFunc = funcA(); 
// closure (funcB is assigned to the global variable myFunc)
// funcA is executed only when myFunc is defined

myFunc(); // THIS ONLY EXECUTES THE ALERT
myFunc();

// Result of this code
// alert foo!
// alert foo!
// Output to console foo! 

// In this case, myFunc, which has the function funcB and the (lexical) environment when funcB was defined,
// are defined as its closure.




/* The condition a function becomes a closure */
// It becomes a closure when the function is used outside of the scope 
// which the function is defined.




/* How the closures are used, when they can be useful */

// 1. Creating private properties and methods, and keeping them
// example 1: Save a passcode without being interefered from outside
const getSecretCode = (function () {
  const secretCode = "me3t9gj#dvnbl)+4g";

  return function() {
    return secretCode;
  };
})(); // (IIFE)

console.log(getSecretCode());
// getSecretCode is its closure and keeps the string "me3t9gj#dvnbl)+4g" as the lexical environment

// example 2: Implement a private counter variable
const counter = (function() {
  let count = 0; // a private counter variable
  return function () {
    count ++;  // Update when the function counter() is called
    return count;
  };
}());

console.log(counter()); // 1
console.log(counter()); // 2

// Tips! A variable in the environment which closures keep can update itself.
// クロージャが記憶している環境内の変数はクロージャ自身によって更新することができる。



// 2. Using as a higher-order function
function circle_area_func(pi){
  function circle_area(radius){
return pi * radius * radius; // return the function which calculate the area
}
  return circle_area;
}

//function that pi is set as 3.1415926
caFunc1 = circle_area_func(3.1415926)

//function that pi is set as 3.14
caFunc2 = circle_area_func(3.14)

// pass radius to the parameters
console.log(caFunc1(2)); // 12.5663704
console.log(caFunc2(2)); // 12.56


// References:
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// WEMO.tech: 【JavaScriptの基礎】レキシカルスコープとクロージャを理解する
// https://wemo.tech/904
// YouTube: JavaScript: JavaScriptのクロージャについて世界一わかりやすく解説してみます【プログラミング言語/クロージャとは】
// https://www.youtube.com/watch?v=OY6plmd5qPE

// Thank you for the great sources!