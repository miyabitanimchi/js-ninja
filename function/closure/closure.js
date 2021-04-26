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
// A: 産みの親(と祖先全員)が持っている変数と関数の組み合わせ(レキシカル環境)をクロージャと呼ぶ。