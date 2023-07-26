
// Hoisting Concept

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

// Window
console.log(window.a);
console.log(this.a);

// defined vs undefined
console.log("Memory allocated before execution");
console.log(a);
var a = 10
console.log("Memory allocated after execution "+a);
