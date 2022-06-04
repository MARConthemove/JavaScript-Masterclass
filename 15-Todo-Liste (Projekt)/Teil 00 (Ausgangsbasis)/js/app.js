"use strict"

const KEY_ENTER = 13

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Selectors
    const newTodoElement = document.querySelector(".new-todo")
    const todoListElement = document.querySelector(".todo-list")

    const checkBoxes = document.querySelectorAll(".toggle")

    // Starting state
    newTodoElement.value = ""

    // Event => Checkbox
    // TODO: new <li> elements should also be checked via addEventListener!
    const checkCheckbox = () => {
        console.log("checkbox clicked")
    }

    for (const todoItem of checkBoxes) {
        todoItem.addEventListener("click", () => {
            checkCheckbox()
        })
    }

    // Event => listen to press "Enter"
    newTodoElement.addEventListener("keypress", (event) => {
        const text = newTodoElement.value

        // Test if text is empty
        if (text === "") {
            return
        }

        // Check "enter" key press
        if (event.keyCode === KEY_ENTER) {
            // Building li Element

            // <button class="destroy">
            const newButtonElement = document.createElement("button")
            newButtonElement.classList.add("destroy")

            // <label>
            const newLabelElement = document.createElement("label")
            newLabelElement.appendChild(document.createTextNode(text))

            // <input class="toggle" type="checkbox">
            const newInputCheckbox = document.createElement("input")
            newInputCheckbox.type = "checkbox"
            newInputCheckbox.classList.add("toggle")
            // newInputCheckbox.setAttribute("type", "checkbox")

            // <div class="view">
            const newDivElement = document.createElement("div")
            newDivElement.classList.add("view")

            // <div class="view">
            newDivElement.appendChild(newInputCheckbox)
            newDivElement.appendChild(newLabelElement)
            newDivElement.appendChild(newButtonElement)

            // <li>
            const liElement = document.createElement("li")
            liElement.appendChild(newDivElement)

            todoListElement.prepend(liElement)
            newTodoElement.value = ""
        }
    })



    // Correct Autocomplete
    // if (cardHeader instanceof HTMLElement) {
    // }
})
