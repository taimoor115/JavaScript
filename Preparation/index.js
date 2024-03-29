let arr = [1, 2, 3, 3, 5, 6, 7];

const a = arr.find((f) => f % 2 == 0);
console.log(a); // Return a value

const b = arr.filter((f) => f % 2 == 0);
console.log(b); // Return an Array

const c = arr.slice(0, 6);
console.log(c); // Return an Array

arr.push(8, 9);
console.log(arr); //modify the original array

let arr1 = arr.concat(10, 11);
console.log(arr1); // Not modify the original array

let arr2 = [1, 2, 3, 4, 5];
arr2.splice(0, 0, "x", "y");
console.log(arr2);
arr2.splice(0, 2);
console.log(arr2);

function sum(a, b, c) {
  console.log(arguments[0]); // array like objects
}
sum(1, 2, 3);

const arr3 = [...arr2];
console.log(arr3);

arr3[0] = "Taimoor";
console.log(arr3);
console.log(arr2); //Shallow Copy

const arr4 = { 0: "a", 1: "b" };
const arr5 = Array.from(arr4);
console.log(arr5);
