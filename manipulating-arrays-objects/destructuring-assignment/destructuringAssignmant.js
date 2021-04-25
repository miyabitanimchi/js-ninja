/* Destructuring Assignment / April 25th 2021 */

/* A: What is the destructuring assignment? */
// Q: It allows us to destructure an array and an objects, take out the values and 
// the properties, and assign them into a variable.
// Q: 配列とオブジェクトを分解し、要素や値を一つ一つの変数に代入する。




// Lab 1: How it looks like with an array

// -- 1. Without the destructuring assignment --
const countryList = ['Japan', 'Canada', 'Singapore', 'Sweden', 'Brazil'];

const item0 = countryList[0];
const item1 = countryList[1];
const item2 = countryList[2];
const item3 = countryList[3];
const item4 = countryList[4];
const item5 = countryList[5];

console.log(item0, item1, item2, item3, item4, item5);
// Japan Canada Singapore Sweden Brazil undefined


// -- 2. With the destructuring assignment --
const countryList2 = ['Japan', 'Canada', 'Singapore', 'Sweden', 'Brazil'];
let [item00, item01, item02, item03, item04, item05] = countryList2;
console.log(item00, item01, item02, item03, item04, item05);
// Japan Canada Singapore Sweden Brazil undefined

// (With the spread syntax)
let rest;
[item00, item01, item02, ...rest] = countryList2
console.log(rest); // [ 'Sweden', 'Brazil' ] ...This takes out as an array
console.log(item00); // Japan




// Lab 2: How it looks like with an object
// -- 1. Basic assignment --
const obj = {
  x: 100,
  y: 30
}
const {x, y} = obj;
console.log(x, y);


// -- 2. Assignment without declaration --
let cityA, cityB;

({cityA, cityB} = {cityA: "South Korea", cityB: "India"})
console.log(cityA, cityB); // South Korea India


// -- 3. Assigning to new variable names --
const familyNames = {a: 'Smith', b: 'Li'};
const {a: name1, b: name2} = familyNames;
console.log(name1, name2); // Smith Li




// Lab 3: Swapping values of an array
let a = 'BC';
let b = 'QC';

[a, b] = [b, a];
console.log(a); // QC
console.log(b); // BC  ...Values(Variabels) are swapped




// Destructuring fields from objects passed as a function parameter
const dishInfo = {
  dishId: 1,
  name: 'Tuna roll',
  price: {
    withMisoSoup: 7,
    withoutMisoSoup: 5
  }
};

function dishId({dishId}) {
  return dishId;
}

function tunaRollCombo({name, price: {withMisoSoup: setPrice}}) {
  return `${name} with miso soup is $${setPrice}`;
}

console.log(dishId(dishInfo)); // 1
console.log(tunaRollCombo(dishInfo)); // Tuna roll with miso soup is $7


// References:
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Qiita: 《JavaScript》ES6の分割代入のはじめかた。
// https://qiita.com/uto-usui/items/a9d17447fe81c17c41fa
// Qiita: JavaScript: オブジェクトの分割代入とスプレッド構文を使ってみる
// https://qiita.com/FumioNonaka/items/58358a29850afd7a0f37

// Thank you for the great sources!