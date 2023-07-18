// 1.Document Objects
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 'DOM';
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all );
console.log(document.all[10]);
document.all[10].textContent = 'Hey'
console.log(document.links);
console.log(document.forms);
console.log(document.images);

// 2. Selectors

let header = document.getElementById('header-title');
console.log(header);
let head = document.getElementById('main-header');
head.style.borderBottom = 'solid 8px black'
header.textContent = 'Hey';
header.innerText = 'Hello';
console.log(header.textContent);//It show the hide content like css display none content
console.log(header.innerText); //It only show that content that are on the screen
header.innerHTML = 'InnerHTML';

header.style.borderBottom = 'solid 1px black'

// ClassName

let items = document.getElementsByClassName('list-group-item')
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello';
items[1].style.fontWeight = 'bolder';

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = 'yellow';
}
for (i of items) {
  i.style.backgroundColor = 'red';
}

// By Tag Name
let li = document.getElementsByTagName('li');
for (const i of li) {
  i.style.color = 'red';
}

//By Query Selector

let input = document.querySelector('input');

input.value = 'red';

let input2 = document.querySelector('input[type="submit"]');
input2.value = 'Plz Send'

let list1 = document.querySelector('.list-group-item');
list1.style.color = 'yellow'


let list4 = document.querySelector('.list-group-item:last-child');
list4.style.color = 'grey'

let nthChild = document.querySelector('.list-group-item:nth-child(2)')
nthChild.style.color = 'grey'



// Query Selector All

let titles = document.querySelectorAll('.title')
titles[0].textContent = 'Taimoor'

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');
for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = '#f4f4f4';
  even[i].style.backgroundColor = '#ccc'
}
let textColor = document.querySelectorAll('.list-group-item');
console.log(textColor);

for(let i = 0; i < textColor.length; i++) {
  textColor[i].style.color = 'grey';
}
