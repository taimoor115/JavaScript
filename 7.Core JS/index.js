// // // Promises

// // // fetch function is used to get the result from the website it is built in js
// // // if we use only fetch function then it gives us the promise in return
// // // But it doesn't gives us the result if we want some result then we should use await with fetch
// // // But if we directly give await to the fetch and varaible then it gives us the syntax error that fetch only used in async function
// // // SO make a async function

// // async function getData() {
// //   let data = await fetch("https://jsonplaceholder.typicode.com/users");
// //   console.log(data);
// // }

// // getData();
// // console.log("hello");

// // fetch('https://jsonplaceholder.typicode.com/users')
// // .then((data) => {console.log(data);})
// // .catch((error) => {console.log(error);})

// // Closures
// // . A closure is the combination of a function and the lexical environment within which that function was declared.

// // function outer() {
// //   let num1 = 9;
// //   function inner() {
// //     return num1;
// //   }
// //   return inner;
// // }
// // let a = outer()();
// // console.log(a);


// // function makeFunc() {
// //   const name = "Mozilla";
// //   function displayName() {
// //     console.log(name);
// //   }
// //   return displayName;
// // }

// // const myFunc = makeFunc();
// // myFunc();


// // Call Apply bind 



// const name1 = {
//   firstName : "Taimoor",
//   lastName : "Hussain",
// }

// let printName = function(city, address ) {
//   console.log(`${this.firstName} ${this.lastName} ${city} ${address}`);
// }
// printName.call(name1, "Lahore", "Amir Town")

// const name2 = {
//   firstName: "Ghayoor",
//   lastName :"Hussain",
// }

// printName.call(name2, "Lahore", "Amir Town");

// printName.apply(name2, ["Lahore", "Amir Town"])

// let print = printName.bind(name2, "Lahore", "Amir Town")
// print()


// PolyFill For bind function:

// let name1 = {
//   firstName : "Taimoor Hussain",
// }

// let printFunction = function(city,address) {
//   console.log(this.firstName + " " + city +  " " + address);
// }

// let print = printFunction.bind(name1, "Lahore")
// print("Amir Town")



// Function.prototype.myBind = function (...arg) {
//   let obj = this
//   let params = arg.slice(1);
//   return function(...arg2) {
//       obj.apply(arg[0], [...params, ...arg2]);
//   }
// }

// let print2 = printFunction.myBind(name1, "Lahore")
// print2("Amir Town")


// Function Curring:

// Two methods

// function sum(x,y) {
//   console.log(x+y);
// }

// let returnFn = sum.bind(this, 3);
// returnFn(4);


// function outer(x) {
//   return function inner(y) {
//     console.log(x+y);
//   }
// }

// let fn = outer(3);
// fn(4);


// Prototype and Prototypal inheritence 
// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

// Creating instances
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Both instances inherit the sayHello method
person1.sayHello(); // Output: Hello, my name is Alice and I'm 30 years old.
person2.sayHello(); // Output: Hello, my name is Bob and I'm 25 years old.


console.log(Person.__proto__);

let obj1 = {
  name: "Taimoor",
  last: "Hussain",
  age: 22,
}
let obj2 = {
  name: "Ghayoor Hussain",
}

obj2.__proto__ = obj1;

console.log(obj2.age);


let personProto = {
  fn: function() {
    console.log("hello");
  }
}

const person = Object.create(personProto);

person.fn()
