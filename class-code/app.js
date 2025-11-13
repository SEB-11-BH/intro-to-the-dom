// get an html element in my JS 
// same selector as css selectors
const mainHeaderElement = document.querySelector('#main-header')

const navLinkElement = document.querySelector('#nav-link')

console.log(mainHeaderElement)


mainHeaderElement.textContent = 'Changed Website Header'


// any attribute you want to change use . notation
mainHeaderElement.id = 'new-id'
// className for changing the class
mainHeaderElement.className = 'all-headers'






// a tag has no text inside
// a tag has no href value

navLinkElement.textContent = 'Go to General Assembly Website'

navLinkElement.href = 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-the-dom/modifying-an-element/'


navLinkElement.style.backgroundColor = 'blue'

navLinkElement.style.padding='20px'


// Exercise 1:
// 1. add an img tag to your html with the id cat-image
// 2. in your js fetch the img tag using querySelector
// 3. change the src to a cat image from online: https://img.freepik.com/free-photo/portrait-beautiful-purebred-pussycat-with-shorthair-orange-collar-neck-sitting-floor-reacting-camera-flash-scared-looking-light-indoor_8353-12551.jpg?semt=ais_hybrid&w=740&q=80
// 4. change the alt attribute to cat-picture



// querySelector only returns 1 element

// to get multiple elements use querySelectorAll()
const todoItemElements = document.querySelectorAll('.todo-item')

console.log(todoItemElements)

// todoItemElements[0].style.color = 'green'

// todoItemElements[1].style.color = 'green'


for(let OneLiElement of todoItemElements){
    if(OneLiElement.textContent === 'JavaScript' || OneLiElement.textContent === 'CSS'){
            OneLiElement.style.color='green'

    }
    else{
        OneLiElement.style.color='red'
    }
    console.log(OneLiElement)
}


// forEach()
todoItemElements.forEach((OneLiElement)=>{
    if(OneLiElement.textContent === 'JavaScript' || OneLiElement.textContent === 'CSS'){
            OneLiElement.style.color='green'

    }
    else{
        OneLiElement.style.color='red'
    }
    console.log(OneLiElement)
})


for(let i =0; i<todoItemElements.length; i++)
    {
    if(todoItemElements[i].textContent !== 'Python' ){
            todoItemElements[i].style.color='green'

    }
    else{
        todoItemElements[i].style.color='red'
    }
    console.log(todoItemElements[i])
}

