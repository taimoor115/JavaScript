// let itemsList = document.querySelector('#items');
// // Parent Node & Parent Element are the same then can be use
// // Interchangable
// console.log(itemsList.parentNode);
// itemsList.parentNode.style.backgroundColor = 'red';
// console.log(itemsList.parentNode.parentNode);

// // Child Nodes
// console.log(itemsList.childNodes); //It includes white spaces
// console.log(itemsList.children);//It doesn't include white-spaces
// console.log(itemsList.children[1]);
// itemsList.children[1].style.backgroundColor = 'yellow';
// // First Child
// console.log(itemsList.firstChild); //It includes white spaces
// console.log(itemsList.firstElementChild);

// itemsList.firstElementChild.style.backgroundColor = 'yellow'
// itemsList.firstElementChild.textContent = 'Heyy'
// // Last Child
// itemsList.lastElementChild.style.backgroundColor = 'yellow'
// itemsList.lastElementChild.textContent = 'Heyy 4'
// // Next Sibling
// console.log(itemsList.nextSibling);
// // Next Element Sibling
// console.log(itemsList.nextElementSibling); // It doesn't have sibling in our case

// // previous Sibling
// console.log(itemsList.previousElementSibling );



// Create Elements
var myDiv = document.createElement('div');
// Add class
myDiv.className = 'hello'
// Add id
myDiv.id = 'hello1';
//Add Attribute
myDiv.setAttribute('title', 'Hello Div');
// Add textNode
var divText = document.createTextNode('This is DOM Manipulation');
myDiv.appendChild(divText);

let container = document.querySelector('header .container');
container.appendChild(myDiv);

let h = document.querySelector('header h1');
container.insertBefore(myDiv, h);
