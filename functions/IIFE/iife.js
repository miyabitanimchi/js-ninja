/* JS IIFE / April 27th */



/* What is IIFE? */
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 
// by MDN
// 関数を定義すると同時に実行するための関数、構文。

/* Why it is used? */
// To avoid polluting scopes

/* How it looks like? */
(function () {
  console.log("Ohayo!")
}()); // Ohayo!

(function (num1, num2) {
  console.log(num1 + num2);
}(13, 7)); // 20