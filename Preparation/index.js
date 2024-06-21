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

// var sub1 = Number(prompt("enter your marks"));
// var sub2 = Number(prompt("enter your marks"));
// var sub3 = Number(prompt("enter your marks"));

// var total = 300;
// let sum = sub1 + sub2 + sub3;
// let avg = (sum / total) * 100;
// if (avg >= 80) {
//   alert("A+");
// } else {
//   alert("B");
// }


// setTimeout(() => {
//   console.log("Hello");
// }, 0);

// function x(y) {
//   console.log("x");
//   y();
// }

// x(function y() {
//   console.log("y");
// })



// console.log("Hello");

// setTimeout(() => {
//   console.log("set");
// },0);

// fetch("https://api.netflix.com").then(() => {
//   console.log("fetch");
// })


// console.log("World");




// console.log("hello");
// const arr = [1,2,3];

// arr.map((arr) => console.log(arr))
// console.log("world");



const area = function(radius) {
  return Math.PI * radius * radius;
}


const circumference = function(radius) {
  return 2 * Math.PI * radius;
}


const calculate = function(radius, operation) {
  let output = [];

  for(let i = 0; i < radius.length; i++) {
        output.push(operation(radius[i]))
    }

    return output;
}


let radius = [1,2,3,4];

console.log(calculate(radius, circumference));


// Polyfill of map function


Array.prototype.myMap = function(operation) {
  let output = [];
  for (let index = 0; index < this.length; index++) {
    output.push(operation(this[index]))
  }
  return output;
}


console.log(radius.myMap(area));


function double(x) {
  return x * x;
}

const arr = [1,2,3,4];

const doubleArr = arr.map(double);

console.log(doubleArr);


const binaryArr = arr.map(function(x) {
  return x.toString(2)
})

console.log(binaryArr);