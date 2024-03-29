let a = 12; // global scope
function example1() {
  let b = 21; //function scope
  if(condition) {
    let c  = 1; //local scope
  }
}
function example3() {
  let a = "HELLO WORLD";
  let arr = a.split(" ");
  console.log(arr);
}
example3();

const d = document.querySelectorAll("p");
console.log(d);

for (let i = 0; i < a.length; i++) {
  console.log(a[i].textContent);
}

let number = 12;
const string = "12";
console.log(number == string);

function sum(first, second, ...restArgument) {
  let sum = first + second;
  for (let i of restArgument) {
    sum += i;
  }
  return sum;
}

number = [3, 4, 5];
console.log(sum(1, 2, ...number));

function myFunction(a, b, c) {
  console.log(a, b, c);
}
const args = [1, 2, 3];
myFunction(...args); // Equivalent to myFunction(1, 2, 3)

const str = "hello";
const chars = [...str]; // ['h', 'e', 'l', 'l', 'o']
console.log(chars);

function sum2(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

const args1 = [1, 2, 3, 4, 5];
console.log(sum2(...args1));

let e = "12";
let b = 12;

console.log(e == b);
console.log(e === b);

// Deep Copy
// In deep copy the reference address of the object is copy so if
// we change the content of copied object the content of original object is also changes
let object1 = {
  name: "Taimoor",
};
let object2 = object1;
object2.name = "Taimoor Hussain";

console.log(object1.name);

// Shallow Copy
// In shallow copy the address is not copy the original value is copy

let object3 = {
  name: "Taimoor",
};
let object4 = { ...object3 };
object3.name = "Taimoor Hussain";

console.log(object3.name);
console.log(object4.name);

// Problem in making the shallow copy using  spread operator
let object5 = {
  name: "Taimoor",
  address: {
    city: "Lahore",
    state: "Punjab",
  },
};
let object6 = { ...object5 };
object6.address.city = "Islamabad";
console.log(object5.address.city);
console.log(object6.address.city); // it should be Lahore but it is Islamabad because spread operator make one level shallow copy only
let object9 = {
  name: "Taimoor",
  address: {
    city: "Lahore",
    state: "Punjab",
  },
};
let object10 = Object.assign({}, object9);
object10.address.city = "Islamabad";
console.log(object10.address.city); // Islamabad
console.log(object9.address.city); // Islamabad

Solution:

let object7 = {
  name: "Taimoor",
  address: {
    city: "Lahore",
    state: "Punjab",
  },
};
let object8 = JSON.parse(JSON.stringify(object7));
object7.address.city = "Islamabad";
console.log(object7.address.city); // Islamabad
console.log(object8.address.city); // Now it is Lahore
