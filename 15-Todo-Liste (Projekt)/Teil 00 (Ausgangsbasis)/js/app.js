"use strict"

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Selectors
    const newTodoText = document.querySelector(".header .new-todo")
    const todoList = document.querySelector("ul")
    // const todoList = document.getElementsByClassName("todo-list")

    // Building li Element
    // <li>
    const liElement = document.createElement("li")

    // <div class="view">
    const liDiv = document.createElement("div")
    liDiv.classList.add("view")

    // <input class="toggle" type="checkbox">
    const liInput = document.createElement("input")
    liInput.classList.add("toggle")
    liInput.setAttribute("type", "checkbox")

    // <label>
    const liLabel = document.createElement("label")
    liLabel.appendChild(document.createTextNode(newTodoText.value))

    // <div class="view">
    //   <input class="toggle" type="checkbox">
    //   <label>
    liDiv.appendChild(liInput)
    liDiv.appendChild(liLabel)

    // <li>
    //   <div...>
    //     <input>
    //     <label>
    liElement.appendChild(liDiv)

    // Code testing
    // console.log("liDiv:", liDiv)
    // console.dir("liElement:", liElement)
    // console.log("liInput:", liInput)
    // console.log("newTodo:", newTodoText.value)
    // console.log("todoList:", todoList)

    todoList.appendChild(liElement)

    // Event => listen to press "Enter"
    newTodoText.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            console.log("you pressed enter")
        } else {
            return
        }
    })



    // Correct Autocomplete
    // if (cardHeader instanceof HTMLElement) {

    // }
})
