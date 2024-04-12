# Not defined

In javascript everything is done is global execution context. It always runs in two phase

- Memory Allocation Phase
- Code Execution Phase

Not defined occur when a variable or function not get memory during memory allocation phase

# window in js

window is the global object that is created along with the global execution context so whenever the js program is executed the global execution context global object is created along with this variable is created

# Global space

Anything which is written outside the function is in global space

# Lexical Environment

Whenever a execution context is created a lexical environment is also created . Lexical environment is the local memory and reference to its parent lexical environment

# Scope Chaining

Scope chaining is the process by which the JavaScript engine traverses through nested lexical environments to resolve references to variables or functions. When a variable or function is referenced within a certain scope, the JavaScript engine first looks for it in the current lexical environment. If it's not found there, it continues to search in the outer lexical environment, and so on, until it reaches the global lexical environment.

# Hoisting

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, while the initialization remains in place.

# Temporal dead zone

This zone starts at the beginning of the scope (block of code) where the variable is declared and ends when the variable is actually declared.

# Blocks

Blocks are used to group up the multiple statement where js expects single statement. Block also called compound statement
{
// this is the block
}
if(true) it expects single statement but we can give it multiple statement by using block

# Shadowing

var a = 12;
{
var a = 10;
console.log(a); // output 10
}
console.log(a); // output 10

In case of var it is global scope so the value in the block can change the global value this term is called shadowing in js

let a = 12;
{
let a = 10;
console.log(a); // output 10
}
console.log(a); // output 12

But in case of let & const it maintains the separate memory called script for the global let declaration and block memory for block let declartion

let b = 10
function x() {
let b = 20;
console.log(b);
}
x(); // 20
console.log(b); // 10

let and const work same in function also

## Illegal Shadowing

let a = 20;
{
var a = 12; //error cannot redeclare
}

Below is absolutely right

- var a = 20;
  {
  let a = 12;
  console.log(a); //12
  }
  console.log(a); //20

- let a = 20;
  {
  let a = 12;
  console.log(a); //12
  }
  console.log(a); //20

- let a = 20;
  function x() {
  var a = 12;
  console.log(a);
  }
  x() // 12
  console.log(a); //20

## Lexical Scope in Block Scope let and const

const a = 10;
{
const a = 100;
{
const a = 200;
console.log(a); //200
}
console.log(a); 100
}
console.log(a) //10

- When this code runs it makes firstly a script memory for a = 10
  then make block memory for a = 100
  then make block memory for a = 200

In this code every block has its own a varaible so it access this variable it never access the parent variable

const a = 10;
{
{
console.log(a); //10
}
console.log(a); //10
}
console.log(a) //10

- When this code runs it makes firstly a script memory for a = 10

But in this case the every block uses its parent lexical environment variable

# Closures

Function along with its lexical scope bundle together form a closure

> A closure is created when a function is defined within another function (the outer function) and the inner function captures references to variables in the outer function's scope. This allows the inner function to access those variables even after the outer function has finished executing.

function x() {
var a = 7;
function y() {
console.log(a);
}
return y;
}
var z = x();
console.log(z);
z(); // 7

But the question is that when we call x() it execute and poped out from the stack and there is no a value in global space then how it print 7 when we call the z

So the answer is that when function are returned from another function it still maintain there lexical scope and not only block of code is return but a closure is return and it is created in heap

function x() {
var a = 7;
function y() {
console.log(a);
}
a = 100;
return y;
}
var z = x();
console.log(z);
z(); // 100

function a() {
for (let i = 1; i <= 5; i++) {
setTimeout(function () {
console.log(i);
}, i \* 1000);
}
}

a();
output will be
1
2
3
4
5

function a() {
for (var i = 1; i <= 5; i++) {
setTimeout(function () {
console.log(i);
}, i \* 1000);
}
}

a();
output will be
6
6
6
6
6

Because in Var it reference to same memory location but in let it makes its separate copy for each change in value. In this example var is local scope and let is the block scope

## Text content Vs Inner hmtl

When we change the text content of any element like .class.textElement = "<h1>Strong</h1>" the output is same as you write in "" it deals it as a plaintext and when you do the samething with innerHtml it deal like html element and make heading of Strong innerHtml render text as an html element

## Data Hiding using closures

var count = 0;
function counter() {
count++;
}

In this example anyone can access the count variable it is not private. If we want that the count is not accessible to the outer we make a closure

function counter() {
var count = 0;
function incrementCount() {
count++;
}
}

Now no can access directly the count if we try to do that it will display an error message
If we want to access the count variable to the outside we show return the inner function
function counter() {
var count = 0;
return function incrementCount() {
count++;
console.log(count)
}
}

var counter1 = counter();
counter1() //1
counter1() //2

var counter2 = counter(); // if we do this a fresh copy is generated
counter1() //1
counter1() //2

Scalable Code for counter
function Counter() {
var count = 0;
this.incrementCount = function() {
count++
console.log(count)
}
this.decrementCount = function() {
count--;
console.log(count)
}
}

var counter1 = new Counter();
counter1.incrementCount()
counter1.decrementCount()

## Disadvantages of Closures

- Memory Consumption: Closures keep the outer lexical environment alive even if it's no longer needed, which can lead to increased memory consumption, especially if large data structures are captured within closures.

- Memory Leaks: If closures are not used carefully, they can inadvertently lead to memory leaks. If a closure maintains references to objects that are no longer needed, those objects won't be garbage collected, leading to memory leaks

- Encapsulation of Data: While closures can help encapsulate data and create private variables, they can also make it more challenging to access and manipulate that data from outside the closure, potentially limiting the flexibility of the code.

## Garbage Collector

A garbage collector is a component of many programming languages' runtime systems that manages memory automatically. Its primary function is to reclaim memory occupied by objects that are no longer in use by the program, thereby preventing memory leaks and improving the efficiency of memory utilization.When a program creates objects during its execution, memory is allocated to store those objects. Over time, as the program progresses, some objects may no longer be needed. Without a garbage collector, it would be the responsibility of the programmer to explicitly deallocate memory when it is no longer needed, which can lead to bugs and memory leaks if not done correctly.

# Relation between Closures and Garbage Collector

Closures can influence garbage collection because they can hold references to objects, preventing them from being garbage collected until the closure itself is no longer needed. This can lead to memory leaks if closures are not managed properly. Garbage collectors must be able to identify and collect objects that are no longer reachable, even if they are indirectly referenced by closures, to ensure efficient memory management

# Memory leak program

function createCounter() {
let count = 0;
let increment = function() {
count++;
console.log(count);
};
return increment;
}

// Creating a closure
let counter = createCounter();

// Calling the closure repeatedly
setInterval(counter, 1000);

## Garbage Collection Example

function x() {
var a = 0, b =10;
return function y() {
console.log(a);
}
}
let z = x();
After that we can access the a variable but b is garbage collected

# Function Statement and function Declaration

function a() {}

# Function Expression

var a = function a() {}

Difference between Function statement and function expression is hoisting

# Callbacks

When we call a function and pass a function as an argument then it is called callback function. Callback function are the one which provide us the asyncronusity. Every thing in javascript is executed in the call stack and this call stack is also called main thead.

## Blocking of main thread

If we have a function like
setTimeOut(() => console.log(1), 32000);
setTimeOut print 1 on screen after 32 second if we not have the asyncronous nature of js everthing below this code will execute after 32 second this is called blocking the main thread

function addEvent() {
var count = 0;
document.getElementById("something").addEventListener("click", function() {
console.log("Clicked", ++count);
});
}

attachEventListener();

In this example the inner function is call when we click the button on the screen

## Callback hell

A situation where an excessive amount of nested callback functions are being executed.
In programming languages, callback hell generally refers to an ineffective way of writing code with asynchronous calls. It is also known as the Pyramid of Doom.

## Example

> const cart = ["Pants", "Shirt", "Belts"];

> api.createOrder(cart, function () {
> api.proceedToPayment(function () {

> api.showOrderSummary(function () {
> api.updateTheOrder();
> });
> });
> });

## Inversion of Control

We lose our control code when your using the callbacks.

# Task Queues

There are two types of task queues in javascript.

- Callback Task queue(MTQ)
- Micro Task queue(CTQ)

The Callback Queue, also known as the Task Queue, is where asynchronous tasks such as event handlers, setTimeout callbacks, and I/O operations are queued for execution. These tasks are typically non-promise related.

The Micro Task Queue is a special queue that holds micro-tasks, which are small, short-lived tasks. Promises, mutation observations, and other similar asynchronous operations enqueue their callbacks into the Micro Task Queue.

## Priority and Execution Order:

When the event loop runs, it first processes tasks from the Micro Task Queue before moving on to tasks in the Callback Queue.

This means that micro-tasks, like promises and mutation observations, are given priority over regular callback tasks. Even if both queues have tasks waiting, the event loop will always finish processing all micro-tasks before it starts working on tasks from the Callback Queue.

## Understanding Task Starvation:

Now, imagine this: if micro tasks keep popping up without allowing other tasks a chance to run, what happens next? Well, in this scenario, the Callback Queue won’t get an opportunity to execute its tasks. This situation is what we call the starvation of tasks in the Callback Queue.

# Mark and Sweep Algorithm

The Mark and Sweep algorithm is a widely used technique for garbage collection. It consists of two main phases: marking and sweeping.

## Mark Phase:

- The mark phase begins by marking all objects in memory that are reachable from root objects. Root objects typically include global variables, local variables, and any other references directly accessible by the program.
- The algorithm traverses the object graph starting from these root objects and recursively marks all reachable objects. This marking is often done by setting a flag or bit on each marked object.
- Objects that are not marked during this traversal are considered unreachable and are candidates for garbage collection.

## Sweep Phase:

- Once all reachable objects have been marked, the sweep phase begins.
- During the sweep phase, the garbage collector iterates over all objects in memory.
- For each object encountered, if it is marked as reachable, the marking flag is cleared (reset).
- Objects that remain marked after this phase are not reachable and are considered garbage. They are then deallocated, freeing up the memory they occupied.
- After sweeping through all objects, the memory is effectively cleaned up, and the garbage collector can reset its state for the next cycle.

!V8 Engine Diagrame (https://miro.medium.com/v2/resize:fit:1019/0*ISypeZUo6NggTMff.png)

Promise:
const cart = ["Pants", "Shirt", "Belts"];
const promise = createOrder(cart);
promise.then(function(orderId) {
proceedToPayment()
})

# Promise

Promise is the placeholder or container which will be filled after certain period.
A promise is an object representing the eventual completion or failure of and asyncronous operation.

## Promise State and Promise Result:

Promise state tell in which state promise is like pending fullfill and after promise is fulfilled it gives result to the promise result.

- Code:
  const USER_API_URL = "https://jsonplaceholder.typicode.com/todos";
  const users = fetch(USER_API_URL);
  console.log(users);
  // This will show you the pending state. But when you expand the object the promise state is in fullfilled state. The answer of this confusion is relay on the executing behaviour of js it will execute the user url first then promise goes on the microtask queue and then console log at this time the promise is not resolve yet thats why it show us that

This problem can be resolve using promise chainging
const cart = ["Pants", "Shirt", "Belts"];

> Problem
> createOrder(cart, function () {
> proceedToPayment(function () {
> showOrderSummary(function () {
> updateTheOrder();
> });
> });
> });

> Promise Chain
> createOrder(cart)
> .then(function () {
> return proceedToPayment();
> })
> .then(function () {
> return showOrderSummary();
> })
> .then(function () {
> return updateTheOrder();
> });

> We can also write this
> createOrder(cart)
> .then(() => proceedToPayment())
> .then(() => showOrderSummary())
> .then(() => updateTheOrder());
