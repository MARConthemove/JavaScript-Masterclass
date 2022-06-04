"use strict"

const KEY_ENTER = 13

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Selectors
    const newTodoElement = document.querySelector(".new-todo")
    const todoListElement = document.querySelector(".todo-list")
    const footerElement = document.querySelector(".footer")
    const footerCounterElement = document.querySelector(".todo-count strong")
    const clearCompletedElement = document.querySelector(".clear-completed")

    const refreshFooter = () => {
        if (todoListElement.children.length === 0) {
            footerElement.style.display = "none"
        } else {
            footerElement.style.display = ""
        }

        let todoCounter = 0
        for (const todoListItem of todoListElement.children) {
            if (!todoListItem.classList.contains("completed")) {
                console.log("completed")
                todoCounter++
            }
        }
        // Alternativ:
        // let todoCounter = todoListElement.querySelectorAll("li:not(.completed)").length
        footerCounterElement.innerText = todoCounter

        let completedCounter = todoListElement.querySelectorAll("li.completed").length
        if (completedCounter === 0) {
            clearCompletedElement.style.display = "none"
        } else {
            clearCompletedElement.style.display = ""
        }
    }

    refreshFooter()

    // Starting with empty newTodoBox
    newTodoElement.value = ""

    // Event => Checkbox
    const addCallbacksForLi = (liElement) => {
        const checkBoxElement = liElement.querySelector(".toggle")
        const destroyButtonElement = liElement.querySelector(".destroy")

        // Checkbox Eventlistener:
        checkBoxElement.addEventListener("change", () => {
            if (checkBoxElement.checked === true) {
                liElement.classList.add("completed")
            } else {
                liElement.classList.remove("completed")
            }
            refreshFooter()
        })

        // Destroy button event listener:
        destroyButtonElement.addEventListener("click", () => {
            liElement.remove()
            refreshFooter()
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

            addCallbacksForLi(liElement)

            todoListElement.prepend(liElement)
            newTodoElement.value = ""

            refreshFooter()

            // if (todoListElement.childElementCount === 0) {
            //     console.log("Ich bin leer")
            // }
        }
    })

    clearCompletedElement.addEventListener("click", (event) => {
        const completedLiElements = todoListElement.querySelectorAll("li.completed")
        for (const completedLiElement of completedLiElements) {
            completedLiElement.remove()
        }

        refreshFooter()
    })

    // Correct Autocomplete
    // if (cardHeader instanceof HTMLElement) {
    // }
})
