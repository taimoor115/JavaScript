let button1 = document.getElementById('button').addEventListener('click', function() {
  console.log("Click button");
})

let button = document.getElementById('button').addEventListener('click', buttonFunction);

function buttonFunction(e) {
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('#main-header').textContent = "Event";
  document.querySelector('#main').style.backgroundColor = 'grey'

  console.log(e);
  console.log(e.target);
  console.log(e.target.className);
  console.log(e.target.id);
  console.log(e.type);
  console.log(e.clientX);
  console.log(e.clientY);
  console.log(e.offsetX);
  console.log(e.offsetY);
  console.log(e.altKey);
  console.log(e.shiftKey);
  console.log(e.ctrlKey);

}


let btn = document.querySelector('#button');
let box = document.getElementById('box')
let output = document.getElementById('output');

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');

// Mouse Events

btn.addEventListener('click', eventFuntion);
btn.addEventListener('dblclick', eventFuntion);
btn.addEventListener('mouseup', eventFuntion);
btn.addEventListener('mousedown', eventFuntion);
box.addEventListener('mouseenter', eventFuntion); //When we go inside the box then it invoke
box.addEventListener('mouseleave', eventFuntion); // When we go outside the box then it invoke
box.addEventListener('mouseover', eventFuntion);//It invokes in text and box both
box.addEventListener('mouseout', eventFuntion); // If we got out from text inside the box then it invoke
box.addEventListener('mousemove', eventFuntion); //invoke when we go to the box


//keyboard Events
itemInput.addEventListener('keydown', eventFuntion); // invoke when key is pressed
itemInput.addEventListener('keyup', eventFuntion); // invoke when key is released
itemInput.addEventListener('keypress', eventFuntion);

itemInput.addEventListener('focus', eventFuntion); // when cursor blink
itemInput.addEventListener('blur', eventFuntion); // when you clicked outside the input
    itemInput.addEventListener('cut',eventFuntion)
    itemInput.addEventListener('paste',eventFuntion)
    itemInput.addEventListener('input',eventFuntion) // when you write something
form.addEventListener('submit',eventFuntion)
function eventFuntion(e) {
  e.preventDefault();
  console.log(e.type);

  output.innerHTML = '<h3>MouseX:'+e.offsetX +'</h3><h3>MouseY:' + e.offsetY + '</h3>'
  box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+","+ 40 +")";
  box.style.color = 'white';
}
