

function createTodo() { 
    let mainContainer = document.querySelector('.container') 
    let todoContainer = document.createElement('div')
    let title = document.createElement('h1')
    title.innerText = "My todo list "
    todoContainer.appendChild(title)
    todoContainer.className = "todoContainer"
    let list = document.createElement('ul')
    let listItem = document.createElement('li')
    listItem.innerText = "Learn React"
    list.appendChild(listItem)
    todoContainer.appendChild(list)
    mainContainer.appendChild(todoContainer)
}
createTodo()

let btn = document.querySelector('button')
btn.addEventListener('click', () => {
    btn.innerText = 'clicked'
})