let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Submit Event:
form.addEventListener('submit', addItems);
// Remove Event
itemList.addEventListener('click', removeFunction);
// Filter List
filter.addEventListener('keyup', filterFunction);


function addItems(e) {
  e.preventDefault();

  // store input value
  let newItem = document.getElementById('item').value;

  // create element
  let li = document.createElement('li');

  // add classname
  li.className = 'list-group-item';

  // add text node
  li.appendChild(document.createTextNode(newItem));

  // create delete button
  let deleteBtn = document.createElement('button');

  // add classes
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // add text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // append deleteBtn to li
  li.appendChild(deleteBtn);

  itemList.appendChild(li);

  item.value = '';
}



function removeFunction(e) {
  if(e.target.classList.contains('delete')) {
    if(confirm('Are you Sure?')) {
      let li = e.target.parentElement;
        itemList.removeChild(li);
    }
  }
}





function filterFunction(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
