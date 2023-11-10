// // Promises

// // fetch function is used to get the result from the website it is built in js
// // if we use only fetch function then it gives us the promise in return
// // But it doesn't gives us the result if we want some result then we should use await with fetch
// // But if we directly give await to the fetch and varaible then it gives us the syntax error that fetch only used in async function
// // SO make a async function

// async function getData() {
//   let data = await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log(data);
// }

// getData();
// console.log("hello");

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((data) => {console.log(data);})
// .catch((error) => {console.log(error);})

// Closures
// . A closure is the combination of a function and the lexical environment within which that function was declared.

function outer() {
  let num1 = 9;
  function inner() {
    return num1;
  }
  return inner;
}
let a = outer()();
console.log(a);


function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
