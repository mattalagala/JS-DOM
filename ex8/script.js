/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to) 
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

<<<<<<< HEAD


function myFunction () { 
var input = document.getElementById('description')
let newLi = document.createElement('li')
newLi.setAttribute('id', 'childDiv')
var cbox = document.createElement("INPUT")
cbox.setAttribute("type", "checkbox")
var label = document.createElement("label")
label.setAttribute("for", "checkbox")
label.setAttribute('onclick', 'func(this)')
// label.setAttribute('id', 'childDiv')
document.getElementById('todo-list').appendChild(newLi) 
label.append(input.value)
var deleteBtn = document.createElement("BUTTON")
deleteBtn.append('Delete Button')
deleteBtn.setAttribute("type", "button")
deleteBtn.setAttribute('onclick', 'func(this)')
newLi.append(cbox,label,deleteBtn)
}

function func () {

    var el = document.getElementById('childDiv')
    
    console.log (el)
    el.remove()
    

}


// function func (t) {
//           t.style.display ='none'
    
//     }
 
// var newItem = document.createElement('li')
// var textnode = document.createTextNode(input);         // Create a text node
// newItem.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("todo-list").appendChild(newItem); 
=======
var inputItems = document.getElementById('description')

var button = document.getElementById('add-button')

function update(i){
    var elem = document.getElementById('description');
    elem.value += i.innerHTML;
}


console.log (inputItems.nodeValue)
>>>>>>> 98f083e3a834c1c52377894d8b3ffde30d455efd
