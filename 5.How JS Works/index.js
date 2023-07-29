
// // Hoisting Concept

var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

// // Window
console.log(window.a);
console.log(this.a);

// // defined vs undefined
console.log("Memory allocated before execution");
console.log(a);
var a = 10
console.log("Memory allocated after execution "+a);


// Lexical Scope

function a() {
  c();
  function c() {
    console.log(b);
  }
}
var b = 10;
a();


// Temporal Dead Zone

console.log(a);
let a = 10;

// block Scope:

if(true) true;

{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
  console.log(b);
  console.log(c);



  let x = 10;
  {
  let x = 100;
    console.log(x);
  }
  console.log(x);





  var y = 10;
{
  var y = 100;
  console.log(y);
}
console.log(y);


  const z = 10;
{
  const z = 100;
  console.log(z);
}
console.log(z);

// Closures

function a() {
  var t = 9;
  function b() {
    console.log(a);
  }
  t = 100;
  return b;
}
var x = a();
// .... Thousand of Lines
x();

// Now it will give us a value of 100;Because JS is not value persisted it is reference persisted

function c() {
  var r = 10;
  function a() {
  var t = 9;
  function b() {
    console.log(t,r); // The function b is along with lexical scope of a and c because it access both variable
  }
  b();
}
a();
}
c();


function x() {
  var i = 1;
  setInterval(() => {
    console.log(i);
  },1000);
  console.log("Hello World");
}
x();

// It first print hello world than print the value of i

// Question Show 1,2,3,4,5 on console along with that second 1 in 1sec 2 in 2sec

function x() {
  for (let i = 1; i <= 5; i++) { // When we use let every iteration it makes new copy of i
    setTimeout(() => {           //When we use var it first iterate i to 6 then call setTimeout Function
      console.log(i);
    }, i * 1000);
  }
}

x();


// with var
function x() {
  for (var i = 1; i <= 5; i++) { // with var it is not working just because var variable point to same variable and we need the new copy of variable thats why we use the function to create new copy
    function close(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
}
x();


// We can also achieve data hiding

function counter() {
  let count = 0;
 return function incrementCount() {
    count++;
    console.log(count);
  }
}
var counter1 = counter();
counter1();
console.log(count);// No one can access count
var counter2 = counter(); //Counter2 is entirely different counter
counter2();
console.log(counter2);

// Clouser with Constructor
function Counter() {
  let count = 0;

  this.incrementCount = function() {

    count++;
    console.log(count);
  }
}
var count1 = new Counter();
count1.incrementCount();


//Function Statement
function name(params) {

}

// Function Expression

 var x = function () {

 }

// Function Declartion
function name(params) {

}

// Named Function Expression
var x = function name(params) {

}

// Argument and Parameters

function sum(a,b) { //a,b are parameter or local variable
  return a+b;
}
sum(2,1); //2,1 are actual values or arguments

// First class Function

function a() {
  console.log("hello");
}

function b(a) {
  console.log(a);
}

b(a());


// ...

// CallBack Function

// setTimeout is the ansync function thats why X,Y is printed first
// We can achive the async programming using call function

setTimeout(() => {
  console.log("Timer");
},5000);

function x(y) {
  console.log("X");
  y();
}

x(function y() {
  console.log("Y");
})



console.log("Start");

setTimeout(function cb() {
  console.log("Call back");
},5000);
console.log("End");


// // Block the main thread
// // setTimeout work after the 10sec because it still wait in the callback queue or untill the GEC is poped out from call stack
let startDate = new Date().getTime();
let endDate = startDate;

while(endDate < startDate + 10000) {
  endDate = new Date().getTime();
}


// Higher Order Function
function x() {
  console.log("Hello");
}

function y(x) { //x call back function and y is the higher order function
  x();
}

y(x);


// Question: Find area of circle PI*r*r for all values of array

// Bad way
radius = [1,2,3,4];

const area = function(radius) {
  let arr = [];
  for(let i = 0; i < radius.length; i++) {
    arr.push(Math.PI * radius[i] * radius[i]);
  }
    return arr;
}
console.log(area(radius));

// optimized way

radius = [1,2,3,4];

// Circle area
const circleArea = function(radius) {
  return Math.PI * radius * radius;
}
// Circumference
const circumference = function(radius) {
  return 2 * Math.PI * radius;
}

const areaCal = function(radius, logic) {
  let arr = [];
  for(let i = 0; i < radius.length; i++) {
    console.log(arr.push(logic(radius[i])));
  }
  return arr;
}

console.log(areaCal(radius, circleArea));
console.log(areaCal(radius,circumference));
