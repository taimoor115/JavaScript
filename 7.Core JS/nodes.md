### Call
In JavaScript, the `call()` method is used to invoke a function with a specified `this` context and arguments provided individually. It allows you to explicitly set what `this` refers to within the function when it is executed.

### Apply
Similarly, the `apply()` method is used to invoke a function with a specified `this` context and arguments provided as an array or an array-like object. Like `call()`, it allows you to explicitly set the `this` value within the function.

### Bind
The `bind()` method creates a new function that, when called, has its `this` keyword set to a specific value, and with a given sequence of arguments preceding any provided when the new function is called. It allows you to create a new function with a preset context (`this`) and optionally some initial arguments.

#### Polyfill for bind method
```javascript
Function.prototype.myBind = function (...arg) {
  let obj = this
  let params = arg.slice(1);
  return function(...arg2) {
      obj.apply(arg[0], [...params, ...arg2]);
  }
}

let print2 = printFunction.myBind(name1, "Lahore")
print2("Amir Town")


## Function Currying
Function currying is a technique used in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking only one argument. The process of currying involves breaking down a function that expects multiple arguments into a series of unary functions (functions with only one argument).

function sum(x,y) {
  console.log(x+y);
}

let returnFn = sum.bind(this, 3);
returnFn(4);


function outer(x) {
  return function inner(y) {
    console.log(x+y);
  }
}

let fn = outer(3);
fn(4);


## Prototype Chain
When you access a property or method on an object, JavaScript first looks for it directly on that object. If it's not found, it looks at the object's prototype, and if the property or method is found there, it's used. If not, JavaScript looks at the prototype of the prototype (and so on), forming what's called the prototype chain until it reaches the top-level `Object.prototype`.

## Constructor Functions
When you create objects using constructor functions (or classes in modern JavaScript), the `prototype` property of the constructor function is used as the prototype of the objects created by that constructor.

## Prototype Inheritance
Objects inherit properties and methods from their prototype. This allows for a form of inheritance in JavaScript. You can add properties or methods to an object's prototype, and all instances created from that object (or constructor function) will inherit those properties and methods.

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
