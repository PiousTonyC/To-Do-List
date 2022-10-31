// Add a "checked" symbol when clicking on a list item
/*
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.childNode.className === 'check-box') {
    ev.target.classList.toggle('checked');
  }
}, false); */

// Create a new list item when clicking on the "Add" button
function newElement() {

  var li = document.createElement("li");


  var checkbox = document.createElement("input");
  checkbox.type='checkbox';
  var span1 = document.createElement("span");
  span1.appendChild(checkbox);
  li.appendChild(span1);
  span1.className="check-box-span";
  checkbox.className="check-box";


  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.addEventListener('click',function(){
    li.style.display = "none";
  });

  checkbox.addEventListener('click',function(){
    li.classList.toggle('checked'); 
  });
}

var btn = document.getElementsByClassName("addBtn");
document.addEventListener('keypress',function(event){
    let keycode = event.keyCode ? event.keyCode:event.which;

    if(keycode === 13){
        newElement();
    }
});

var timeDisplay = document.getElementById("time");
var time = new Date();
    timeDisplay.innerHTML = time.toLocaleTimeString();
setInterval(function(){
    var time = new Date();
    timeDisplay.innerHTML = time.toLocaleTimeString();
},1000);

var dateDisplay = document.getElementById("date");
dateDisplay.innerHTML = time.toLocaleDateString();