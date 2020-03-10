// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var button = document.getElementById("myButton")
var blueBox = document.querySelectorAll('.box')

button.addEventListener('click', function(){'click', blueBox[0].style.backgroundColor="blue"})
button.addEventListener('click', function(){'click', blueBox[1].style.backgroundColor="blue"})
button.addEventListener('click', function(){'click', blueBox[2].style.backgroundColor="blue"})