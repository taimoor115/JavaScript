"use strict";
// a();
// var b = 10;
// function a() {
//   console.log("Taimoor");
// }

// console.log(b);

// Lexical Scope
// function a() {
//   var b = 10;
//   c();
//   function c() {
//     console.log(c);
//   }
// }
// a();

// console.log(a);
// let a = 12;

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// let b = 23;
// var a = 12;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   // console.log(a);
//   console.log(b);
//   // console.log(c);
// }
// // console.log(a);
// console.log(b);

// let b = 10
// function x() {
//   let b = 20;
//   console.log(b);
// }
// x()
// console.log(b);

// var a = 10;
// {
//   var a = 100;
//   {
//     var a = 200;
//     console.log(200);
//   }
//   console.log(a);
// }

// console.log(a);
// var a = 12;
// function x() {
//   var a = 7;
//   return function y() {
//     console.log(a);
//   };
// }

// var b = x();
// console.log(b);
// b();

// var i = 10;
// function a() {
//   console.log(i);
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//     console.log("HELLO");
//   }
// }

// a();

// function x(y) {
//   setTimeout(() => console.log("x called"), 3000);
//   y();
// }
// x(() => console.log("y called"));

// const cart = ["Pants", "Shirt", "Belts"];

// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       api.updateTheOrder();
//     });
//   });
// });

// const USER_API_URL = "https://jsonplaceholder.typicode.com/todos";

// const users = fetch(USER_API_URL);
// console.log(users); // This will show you the pending state. But when you expand the object the promise state is in fullfilled state. The answer of this confusion is relay on the executing behaviour of js it will execute the user url first then promise goes on the microtask queue and then console log at this time the promise is not resolve yet thats why it show us that
// users.then(function (data) {
//   console.log(data);
// });

// const cart = ["Pants", "Shirt", "Belts"];

// createOrder(cart, function () {
//   proceedToPayment(function () {
//     showOrderSummary(function () {
//       updateTheOrder();
//     });
//   });
// });

// createOrder(cart)
//   .then(() => proceedToPayment())
//   .then(() => showOrderSummary())
//   .then(() => updateTheOrder());

// const cart = ["USB", "Mobile", "Laptop"];
// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   })
//   .catch((err) => console.log(err.message));

// function createOrder(cart) {
//   const promise = new Promise((resolve, reject) => {
//     if (!validateCart(cart)) {
//       let error = new Error("Cart is not validate");
//       reject(error);
//     }
//     const orderId = "12345";
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });
//   return promise;
// }

// function proceedToPayment(orderId) {
//   return new Promise(function (resolve, reject) {
//     return resolve("Payment Successfull");
//   });
// }
// function validateCart(cart) {
//   return true;
// }

// Homework

// const cart = ["USB", "Phones", "Speaker"];

// createOrder(cart)
//   .then((id) => {
//     console.log(id);
//     return id;
//   })
//   .then((id) => proceedToPayment(id))
//   .then((info) => {
//     console.log(info);
//     return showOrderSummary(info);
//   })
//   .then((info) => {
//     console.log(info);
//     updateWallet();
//   });

// function createOrder(cart) {
//   const pr = new Promise((resolve, reject) => {
//     if (!validateCart(cart)) {
//       const error = new Error("CreateOrder Error");
//       return reject(error);
//     }
//     const orderId = "12";
//     if (orderId) {
//       setTimeout(() => resolve(orderId), 2000);
//     }
//   });
//   return pr;
// }

// function proceedToPayment(id) {
//   const pr = new Promise((resolve, reject) => {
//     if (!id) {
//       const error = new Error("Payment error");
//       reject(error);
//     }
//     resolve("Payment Successfull");
//   });
//   return pr;
// }
// function validateCart(cart) {
//   return true;
// }

// function showOrderSummary(info) {
//   return new Promise((resolve, reject) => {
//     resolve("Order is good");
//   });
// }

// function updateWallet() {
//   return new Promise((resolve, reject) => {
//     console.log("Wallet Update");
//   });
// }

// Promises.all:
// If all resolve it will give us the result after all promises are resolved. The result is in the form of array
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 "), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p2"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p3"), 2000);
// });

// Promise.all([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// Output
//   [
//     "p1 ",
//     "p2",
//     "p3"
// ]
// In reject case it will show us an error when it meet reject promise ... it will give us error only

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 "), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p2 rejected"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p3"), 2000);
// });

// Promise.all([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// Promise.allSettled
// Promise.allSettled gives us an array of objects with all resolved and reject promises..
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 "), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p2"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p3"), 2000);
// });

// Promise.allSettled([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// Output
// [
//     {
//         "status": "fulfilled",
//         "value": "p1 "
//     },
//     {
//         "status": "rejected",
//         "reason": "p2"
//     },
//     {
//         "status": "fulfilled",
//         "value": "p3"
//     }
// ]

// Promise.race

// Promise.race gives us the first settled promise weather it is rejected or resolved. It show us the values as a result
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 "), 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p2"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p3"), 2000);
// });

// Promise.race([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
// Output p2 error

// Promise.ant gives us the first settled success result. If all promises is rejected it just show us the all aggregated errors
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p1 "), 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p2"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p3"), 2000);
// });

// Promise.any([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
// Output test.js:339 AggregateError: All promises were rejected

// Async Await
// const name = new Promise((resolve, reject) => {
//   resolve("Taimoor Hussain");
// });

// async function getName() {
//   return name;
// }

// const data = getName();

// data.then((d) => console.log(d));

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Taimoor Hussain1"), 20000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Taimoor Hussain2"), 40000);
});

// Handle via simple function
function getResolved() {
  console.log("h");
  promise1.then((pr) => console.log(pr));
  console.log("1st");
  promise2.then((pr) => console.log(pr));
  console.log("2nd");
}

// getResolved();
// console.log(typeof function () {});
// Output
// 1st // immeditiately
// 2nd
// Taimoor Hussain2 //After 5sec
// Taimoor Hussain1 //After 8sec

// Handle via Async Await

async function getResolved1() {
  console.log("hello");
  const val1 = await promise1;
  console.log(val1);
  console.log("1st");

  const val2 = await promise2;
  console.log(val2);
  console.log("2nd");
}

// getResolved1();

// Output
// 1st
// Taimoor Hussain1
// 2nd
// Taimoor Hussain2

// async function handlePromise() {
//   try {
//     const data = await fetch("https://api.github.com/users/Ghauor");
//     const resposne = await data.json();
//     console.log(resposne);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// handlePromise();
// async function handlePromise2() {
//   const data = await fetch("https:aavasf");
//   const resposne = await data.json();
//   console.log(resposne);
// }

// handlePromise2().catch((err) => console.log(err.message));

// This
("use strict");
// This inside the global space it always attach to the globalObject.. In browser global object is window but it is different in dfferent runtime environment
console.log(this);

function x() {
  console.log(this);
}
x(); // if we use strict mode it will displace undefined
// The reason is the this has the this subsitution when we are using the non strict mode whenever js engine find this with the value of null and undefined it will replace it with the globalObject
window.x(); // This will gives us the result of window even in the strict mode

const student = {
  name: "Taimoor Hussain",
  fn: function () {
    console.log(this);
  },
};

student.fn(); //It will gives the object

const student1 = {
  name: "Taimoor Hussain",
  fn: function () {
    console.log(this.name);
  },
};

const student2 = {
  name: "Alexa",
};

student1.fn.call(student2);

const obj1 = {
  a: "BMW",
  fn: () => {
    const fn2 = () => {
      console.log(this);
    };
    fn2();
  },
};
obj1.fn(); //Output is window
