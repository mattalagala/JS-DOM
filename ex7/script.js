// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp


var sectionHeader = document.querySelectorAll('#section-header')


function myFunction () {

    var section = document.querySelector('#section')

if (section.style.display === 'none') {
    section.style.display = 'block' }
        else {
            section.style.display = 'none'
        }
}





// function myFunction () {

// var section = document.querySelector('#section')

// if (section.style.display === 'none') {
//     section.style.display = 'block' }
//         else {
//             section.style.display = 'none'
//         }
//     }

// function myFunction() {
   
//     if (section.style.display === "none") {
//       section.style.display = "block";
//     } else {
//       section.style.display = "none"
//     }
//     console.log(dir)
//   }