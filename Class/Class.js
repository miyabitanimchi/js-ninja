/* Class in JS / May 12th 2021 */

/* What are Classes of JavaScript? */
// First, classes in JS are not an object. They are a TEMPLATE to
// create an object.
// Classes encapsulute data with code to work on that data.
// Classとは、オブジェクトを作る為の設計書。

/* Defining classes */
// Classes are in fact "special functions", and just as you can define
// function expressions and function declarations, the class syntax has
// two components: class expressions and class declarations.
// クラスは実際には「特別な関数」であり、関数式と関数宣言を定義することができるように、
// クラス構文にもクラス式とクラス宣言の 2つの定義方法があります。
// by MDN

/* Class declarations クラス宣言 */
// How it looks like?
class Student {
  // You declare the keyword class at the beginning
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}

const newStudent = new Student("Mia", 6);
console.log(newStudent); //Student { name: 'Mia', grade: 6 }

/* Class expressions クラス式 */
// without name
const Icecream = class {
  constructor(flavor, price) {
    this.flavor = flavor;
    this.price = price;
  }
};

const newIcecream = new Icecream("Mango", 5);
console.log(newIcecream); // Icecream { flavor: 'Mango', price: 5 }

// with name
const Employee = class NameEmployee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
};

const newEmployee = new Employee("Jim", "Director");
console.log(newEmployee); // NameEmployee { name: 'Jim', position: 'Director' }

const newEmployee2 = new NameEmployee("Emily", "President");
console.log(newEmployee2); // Can't refer to the class with the name "NameEmployee"
// Then when we want to name the class itself? I couldn't really find the answers...

// * What is the constructor method?
// The constructor() method is a special method for creating and initializing objects
// created within a class. by w3schools
// It has to be only one constructor method in a class.

// * What is the super keyword?
// The super keyword represents its parent class of an extended class and it is to call
// the constructor (like the parent's methods and the parameter(s)).

// References:
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// w3schools: https://www.w3schools.com/js/js_classes.asp
// TECH PLAY : JavaScriptのクラス（class）を理解する
// https://techplay.jp/column/482
// SAMRAI ENGINEER Blog : 【JavaScript入門】class構文の使い方・書き方が分かるようになる方法！
// https://www.sejuku.net/blog/49551
// Qiita : (初心者向け) JavaScript のクラス (ES6 対応)
// https://qiita.com/tadnakam/items/ae8e0e95107e1427983f

// Thank you for the great sources!
