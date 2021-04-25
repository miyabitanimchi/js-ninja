/* Spread Syntax / April 24th 2021 */

/* A: What is Spread Syntax? */
// Q: It takes in an iterable (e.g an array and a string) and expands 
// it into individual elements. It removes [] and {}!
// Q: 配列式や文字列などのIterableなオブジェクトを、0 個以上の引数 
// (関数呼び出しの場合) や要素 (配列リテラルの場合) を展開したり、オ
// ブジェクト式を、0 個以上のキーと値のペア (オブジェクトリテラルの場合) 
// を展開することができる。
// すごくざっくり言うと、[]や{}をはずしてくれるもの！

// Definition of 展開... 一つにかたまっていたものを延べ広げること。開いて（発展させて）繰り広げること。


// Lab 1: How it works with an array
const array = ['a', 'b', 'c', 'd'];
console.log(array) //  ['a', 'b', 'c', 'd']
console.log(...array) // a b c d



// Lab 2: Merge an array
const array2 = [6, 5, 4];
const mergedArray = [...array2, 3, 2, 1];
console.log(mergedArray); // [ 6, 5, 4, 3, 2, 1 ]



// Lab3: Merge an object
const obj = {
  name: 'John', 
  age: 25,
}
const mergedObj = {
  ...obj,
  nationality: 'Canada'
}
console.log(mergedObj); // { name: 'John', age: 25, nationality: 'Canada' }

const mergedObj2 = {
  ...obj,
  age: 30
}

console.log(mergedObj2); // { name: 'John', age: 30 }
// * If there is the same property names, they are replaced.



// Lab 4: Copy an array (Shallow Copy)
let array3 = [1, 2, 3, 4, 5];
let copyArray = [...array3];
console.log(copyArray); // [ 1, 2, 3, 4, 5 ]
console.log(array3); // [ 1, 2, 3, 4, 5 ]

// Memo!
console.log(array3 === copyArray) // false
console.log(array3 == copyArray) // false

copyArray.push(6);
console.log(array3); // [ 1, 2, 3, 4, 5 ] ...The original one is not affected
console.log(copyArray) // [ 1, 2, 3, 4, 5, 6 ]




// References:
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// Qiita: JSのスプレッド構文を理解する　
// https://qiita.com/akisx/items/682a4283c13fe336c547#:~:text=%E3%81%94%E4%BA%86%E6%89%BF%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82-,%E3%82%B9%E3%83%97%E3%83%AC%E3%83%83%E3%83%89%E6%A7%8B%E6%96%87(Spread%20Syntax),%E3%82%92%E6%96%87%E5%AD%97%E9%80%9A%E3%82%8A%E5%B1%95%E9%96%8B%E3%81%99%E3%82%8B%E6%A7%8B%E6%96%87%E3%80%82
// TechTechMedia: 【JavaScript】「…」って何者？スプレッド構文について初心者向けに解説！
// https://techtechmedia.com/spread-syntax-javascript/

// Thank you for the great sources!
