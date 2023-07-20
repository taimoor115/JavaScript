// Output Methods
alert('Hey');
console.log("Hello World");
console.error("This is the error");
console.warn("Warning here!");

// Variables & Constant
// var(globally scoped), let, const

let age2 = 15;
age2 = 17;
console.log(age2);

const PI = 3.14;
console.log(PI);


//Data types

const name3 = 'Taimoor';
const age1 = 10;
const rating = 4.5;
const isCool = true;
const x1 = null;
const y1 = undefined;
let z;

console.log(typeof name3);
console.log(typeof age1);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x1);
console.log(typeof y1);
console.log(typeof z);


// String Concatination

const name2 = 'Taimoor Hussain';
const age = 21;

console.log('My name is ' + name2 + ' and My age is '+ age);
console.log(`My name is ${name2} and My age is ${age}`);

let hello = `My name is ${name2} and My age is ${age}`;
console.log(hello);

// String Method

let name1 = 'Taimoor Hussain';
console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.substring(0,7));
console.log(name1.substring(8,15));
console.log(name1.split(''));
const fields = 'IT, Bio, AI, Machine Learning';
console.log(fields.split(', ')) // Make an Array



// Arrays
const nameArr = new Array('Ali', 'Usman','Umer', 'Hamza');
console.log(nameArr)

const arr1 = ['Mango', 1, true, 3.21, 'End'];
arr.push('End');
arr.unshift('start');
console.log(arr1);
console.log(Array.isArray(arr1));
console.log(arr.indexOf('Mango'));


// Object Literals

const person = {
  firstName: 'Taimoor',
  lastName: 'Hussain',
  age: 21,
  hobbies: ['Cricket', 'Coding', 'Teaching'],
  address: {
    street: '21 House# 9',
    city: 'Lahore',
    country: 'Pakistan'
  }
}
console.log(person)
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.address.country);

const {firstName, lastName} = person;
console.log(firstName);
const {address:{city}} = person;
console.log(city);

// // Add More
person.email = 'taimoorhussain985@gmail.com'
console.log(person.email);
const {emailInput} = person;
console.log(emailInput);

const todos = [
  {
    id: 1,
    text: 'Breakfast',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Lunch',
    isCompleted: false
  },
  {
    id: 3,
    text: 'Prayer',
    isCompleted: true
  }
]

console.log(todos);
console.log(todos[0].isCompleted);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON)


// Loops

for (let i = 0; i < todos.length; i++) {
  console.log(`${todos[i].text}: ${todos[i].isCompleted}`);
}

// for of
for (const i of todos) {
  console.log(i.text);
}

const arr = [1,2,3,4,5];


// For each
arr.forEach(function(i) {
  console.log(i)
});

todos.forEach(function(j) {
  console.log(j.text)
} );


// Map Array

const nums = [1,2,3,4,5,6,7,8,9,10];

const mapArray =  nums.map(function(i) {
    if (i % 2 == 0) {
      return i;
    }
})

console.log(mapArray);

console.log(nums);

// // Filter

const oddArray = nums.filter(function(i) {
    if (i % 2 != 0) {
      return i;
    }
})

console.log(oddArray);

// Combine map & filter
const completeArray = todos.filter(function(i) {
  return i.isCompleted === true;
}).map(function(j) {
  return j.text;
});

console.log(completeArray);

const x3 = '10';
if (x3 == 10) {  // double equal doesn't match the datatypes it just match the value;
  console.log('x is 10');
}

const y = '10';
if (y == 10) {  // Triple equal match the value along with datatype
  console.log('x is 10');
}


// Conditionals

const x = 10;
const color = x > 10 ? 'red' : 'blue';

console.log(color);

switch(color) {
  case 'red':
    console.log("Color is Red");
    break;
  case 'blue':
    console.log("Color is Blue");
    break;
  default:
  console.log("Color isn't red or blue");
  break;
}

// Functions

function sum(num1 = 0, num2 = 0) {
  return num1 + num2;
}
console.log(sum(2,3));

// Arrow Function(Anomynous)
const sum = (num1 = 0, num2 = 0) => {
  console.log(num1 + num2);
}

sum(2,1)

// This Keyword

function Person(firstName, lastName, DOB) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.DOB = new Date(DOB);
  // We use prototype
  // this.getBirthYear = function() {
  //   return this.DOB.getFullYear();
  // }
  // this.getFullName = function() {
  //   return `${this.firstName} ${this.lastName}`;
  // }
  Person.prototype.getBirthYear = function() {
      return this.DOB.getFullYear();
    }

  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//  Classes
class Person {

  constructor(firstName, lastName, DOB) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.DOB = new Date(DOB);
  }

  getBirthYear() {
    return this.DOB.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const p1 = new Person('Taimoor', 'Hussain','11-30-2022');
const p2 = new Person('Ghayoor', 'Hussain', '2-2-2022');

console.log(p1.DOB);
console.log(p2.firstName);
console.log(p1.getBirthYear());
console.log(p1.getFullName());

// DOM

// Single Element
const form = document.getElementById('my-form');
console.log(form);
const container = document.querySelector('.container');
console.log(container);

// Multi-Element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

// Loop

const items = document.querySelectorAll('.item');

items.forEach((item) => {
  console.log(item);
})

const ul = document.querySelector('.items');
ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hey</h1>'

const btn = document.querySelector('.btn');
// btn.style.background = 'red'

btn.addEventListener('click', (e) => {
  e.preventDefault();
  // document.querySelector('#my-form').style.background = 'red';
  document.querySelector('body').classList.add('bg-dark');

})

// Form Script

const formId = document.querySelector('#my-form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

formId.addEventListener('submit',onSubmit)

function onSubmit(e) {
  e.preventDefault();

  if (name.value === '' || email.value === '') {
    msg.classList.add('error')
    msg.innerHTML = 'Please fill the fields'

    setTimeout(() => msg.remove(), 1500);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
    userList.append(li);

    // Clear the Fields
    name.value = '';
    email.value = '';
  }
}
