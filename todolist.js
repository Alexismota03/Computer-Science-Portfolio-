var todo = document.getElementById('todolist'),
    form = document.getElementById('myform'),
    field = document.getElementById('newitem');



// Makes submit button add todo list items to the list 
form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  todo.innerHTML += '<div>' + text + '</div>';
  evt.preventDefault();
}, false);

todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  
  evt.preventDefault();
  //This will cause to strikethrough the item on the list and then delete when clicked
if(tar.style.textDecoration === "line-through"){
   tar.parentNode.removeChild(tar);
}else{
    tar.style.textDecoration = "line-through"
}
  
  
  
  
  
}, false);
//This will change the background and the text of the words 
field.style.color = "white";


if( field.style.color === "white"){
  field.style.backgroundColor = "black";
}

