// get an html element in my JS 
// same selector as css selectors
const mainHeaderElement = document.querySelector('#main-header')

console.log(mainHeaderElement)


mainHeaderElement.textContent = 'Changed Website Header'


// any attribute you want to change use . notation
mainHeaderElement.id = 'new-id'
// className for changing the class
mainHeaderElement.className = 'all-headers'
