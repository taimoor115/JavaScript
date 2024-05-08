

Call: In JavaScript, the call() method is used to invoke a function with a specified this context and arguments provided individually. It allows you to explicitly set what this refers to within the function when it is executed

Apply: Similarly, the apply() method is used to invoke a function with a specified this context and arguments provided as an array or an array-like object. Like call(), it allows you to explicitly set the this value within the function. 


Bind:The bind() method creates a new function that, when called, has its this keyword set to a specific value, and with a given sequence of arguments preceding any provided when the new function is called. It allows you to create a new function with a preset context (this) and optionally some initial arguments.


Polyfill for bind method 

Function.prototype.myBind = function (...arg) {
  let obj = this
  let params = arg.slice(1);
  return function(...arg2) {
      obj.apply(arg[0], [...params, ...arg2]);
  }
}

let print2 = printFunction.myBind(name1, "Lahore")
print2("Amir Town")


Function currying 

Function currying is a technique used in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking only one argument. The process of currying involves breaking down a function that expects multiple arguments into a series of unary functions (functions with only one argument).

// Two methods

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
