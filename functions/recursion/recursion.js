/* recursion / June 15th 2021 */

/* Q: What is recursion? */
// Recursion is to make a function call itself.

/* Code Examples */
// 1.
const countDown = (n) => {
  if (n < 1) {
    return [];
  } else {
    const arr = countDown(n - 1);
    arr.unshift(n);
    // review... The unshift() method adds one, or more elements to
    // the beggining of an array
    return arr;
  }
};

console.log(countDown(5));
// [5, 4, 3, 2, 1]

// 2.
const sum = (n) => {
  if (n <= 1) {
    return 1;
  }
  return n + sum(n - 1);
};

console.log(sum(5));
// 15

// 3.
const factorial = (n) => {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(5));
// 120

// 4.
const pow = (x, n) => {
  return n === 1 ? x : x * pow(x, n - 1);
};

console.log(pow(2, 5));

// References:
// JAVASCRIPT.INFO: Recursion and stack
// https://javascript.info/recursion
// TechAcademyマガジン: JavaScriptでの再帰関数の書き方を現役エンジニアが解説【初心者向け】
// https://techacademy.jp/magazine/22265
// Grepper: “Basic JavaScript: Use Recursion to Create a Countdown” Code Answer
// https://www.codegrepper.com/code-examples/javascript/Basic+JavaScript%3A+Use+Recursion+to+Create+a+Countdown

// Thank you for the great sources!
