// const str = "Taimoor";
// let counter = 0;

// for (let i of str) {
//   counter++;
//   console.log(i);
// }
// console.log(counter);

// const person = {
//   name: "Taimoor",
//   gender: "Male",
//   age: 21,
// };
// //Iterate over the objects it gives us the key of the objects
// for (let i in person) {
//   console.log(person[i]);
// }

// console.log(
//   (function (a, b) {
//     return a + b;
//   })(3, 5)
// );

// // High order function

// function map(first, second) {
//   const result = new Array(second.length);

//   for (let i = 0; i < result.length; i++) {
//     result[i] = first(second[i]);
//   }

//   return result;
// }

// const first = function (x) {
//   return x * x * x;
// };

// const arr = [1, 2, 3, 4];
// console.log(map(first, arr));

var sub1 = Number(prompt("enter your marks"));
var sub2 = Number(prompt("enter your marks"));
var sub3 = Number(prompt("enter your marks"));

var total = 300;
let sum = sub1 + sub2 + sub3;
let avg = (sum / total) * 100;
if (avg >= 80) {
  alert("A+");
} else {
  alert("B");
}
