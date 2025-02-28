// //  Simple Explation of pipe function

// function pipe(fn1, fn2) {
//   return function (initialValue) {
//     console.log(`Initial Value  ${initialValue}`);
//     let result1 = fn1(initialValue);
//     console.log(`Result1  ${result1}`);
//     let result2 = fn2(result1);
//     console.log(`Result2  ${result2}`);
//     return result2;
//   };
// }

// // with simple function
// function pipe(...functions) {
//   return function (initialValue) {
//     return functions.reduce((acc, fn) => fn(acc), initialValue);
//   };
// }

// with arrow Funtion
const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

// Building blocks to use for composition
const double = (x) => 2 * x;
const triple = (x) => 3 * x;

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple)(6);
console.log(multiply6);
// console.log(multiply6(6)); // 36

// Another Example
const trim = (str) => str.trim();
const upperCase = (str) => str.toUpperCase();
const addStr = (str) => str + "!";

const updatedStr = pipe(trim, upperCase, addStr);
console.log(updatedStr("   Hello From Pipe       "));
