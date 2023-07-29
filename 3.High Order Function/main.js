const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Simple For loop

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

// For each

companies.forEach(function(i) {
    console.log(i.name);
})

// Filter
/*
-->Purpose: The filter() method is used to extract elements from an array that satisfy
a specific condition and create a new array containing only those elements.
-->How it works: The filter() method executes a callback function for each element
of the array and includes the elements in the new array only if the callback function
returns true for that element. Elements that don't meet the condition are excluded
from the new array.
*/

let canDrink = [];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] > 18) {
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);

// Filter
const canDrink1 = ages.filter(function(i) {
  if(i > 18) {
    return true;
  }
})
console.log(canDrink1);

// Arrow Function

const canDrink2 = ages.filter(i => i > 18);
console.log(canDrink2);

const retailCompanies = companies.filter(function (i) {
  if(i.category === 'Retail') {
    return true;
  }
})

console.log(retailCompanies);


const retailCompanies1 = companies.filter(i => i.category === 'Retail');
console.log(retailCompanies1);


const eightiesCompany = companies.filter(i => (i.start >= 1980 && i.start < 1990))
console.log(eightiesCompany);


const last10Years = companies.filter(i => (i.end - i.start >= 10 ));
console.log(last10Years);


// Map
/*
-->Purpose: The map() method is used to transform each element of an array
and create a new array with the same number of elements, but with each
element transformed based on the logic provided in the callback function.
-->How it works: The map() method executes a callback function for each element
of the array and creates a new array by collecting the return values of the
callback function for each element. The original array remains unchanged.
*/
const company = companies.map(function(i){
    return i.name;
})

console.log(company);


const company1 = companies.map(function(i){
  return `${i.name} ${i.start} - ${i.end}`
})

console.log(company1);

const company2 = companies.map(i => `${i.name} ${i.start} - ${i.end}`);
console.log(company2);


// Sort Array
arr = [5,4,3,2,1];
const sortArr = arr.sort();
console.log(sortArr);


const sortCompany = companies.sort(function(c1, c2) {
  if(c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sortCompany);


const sortCompany1 = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1 ));
console.log(sortCompany1);


// Reduce

arr2 = [1,2,3,4,5,6];

sum1 = 0;
for(let i = 0; i < arr2.length; i++) {
  sum1 += arr2[i];
}

console.log(sum1);

const sum2 = arr2.reduce(function(total, i) {
  return total + i;
}, 0);

console.log(sum2);

const sum3 = arr2.reduce((total, i) => total + i,0)
console.log(sum3);


const companyTotalYear = companies.reduce((total, i) => total + (i.end - i.start),0);
console.log(companyTotalYear);


// Combine Methods
arr3 = [6,5,3,2,1,0,5,4,5,6,1,2,4,5,6,1,2,4,22,44,5,5,6,7,1,3,4,6,71,2];

const combine = arr3
.map(i => i *2)
.filter(i => i >= 10)
.sort((a,b) => a - b)
.reduce((a,b) => a + b);

console.log(combine);
