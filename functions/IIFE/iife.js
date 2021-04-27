/* JS IIFE / April 27th */



/* What is IIFE? */
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 
// by MDN
// 関数を定義すると同時に実行するための関数、構文。

/* Why it is used? */
// To avoid polluting scopes, to encapsulate

/* How it looks like? */
(function () {
  console.log("Ohayo!")
}()); // Ohayo!

// with parameters
(function (num1, num2) {
  console.log(num1 + num2);
}(13, 7)); // 20


// Making properties and methods private (encapsulation)
const counter = (() => { // the counter function gets invoked immediately
  console.log("'counter' is invoked immediately!")
  let count = 10; // private variable

  return {
    increment: () => {
      count += 1;
      console.log(`The current number is ${count}`);
    },
    decrement: () => {
      count -= 1;
      console.log(`The current number is ${count}`);
    }
  };
})();
counter.increment(); // The current number is 11
counter.decrement(); // The current number is 10 ... (11-1)



// References:
// MDN: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// Qiita: JavaScriptで即時関数を使う理由
// https://qiita.com/katsukii/items/cfe9fd968ba0db603b1e
// YouTube: 君たちは「即時関数」を知っているか【分かりすぎて怖いJavaScript入門】
// https://www.youtube.com/watch?v=1VyEfy03NTg

// Thank you for the great sources!