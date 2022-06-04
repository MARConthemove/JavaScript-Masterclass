"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const helpElements = document.querySelectorAll("[data-help]")
    for (const helpElement of helpElements) {
        helpElement.addEventListener("click", (event) => {
            // prevents Browser default behavior
            event.preventDefault()
            // stops Bubbling up the DOM
            event.stopPropation()

            const helpText = helpElement.attributes["data-help"].value
            alert(helpText)
        })
    }

    const cardHeaders = document.querySelectorAll(".card-header")

    // Iteration over cardHeaders:
    for (const cardHeader of cardHeaders) {
        // Correct Autocomplete (so that cardHeader is known as an HTML Element)
        if (cardHeader instanceof HTMLElement) {
            // Selector Variablen:
            const cardBody = cardHeader.nextElementSibling
            const cardHeaderIcon = cardHeader.querySelector("i")

            // Initial State of Page:
            cardBody.classList.add("d-none")
            cardHeaderIcon.classList.remove("fa-angle-double-down")
            cardHeaderIcon.classList.add("fa-angle-double-right")

            // Mouseover Cursor anzeigen
            cardHeader.style.cursor = "pointer"

            // Click EventListener:
            cardHeader.addEventListener("click", (event) => {
                event.preventDefault()

                // Open or Close CardBody:
                cardBody.classList.toggle("d-none")

                // Change Icon when CardBody opened or closed:
                if (cardBody.classList.contains("d-none")) {
                    cardHeaderIcon.classList.remove("fa-angle-double-down")
                    cardHeaderIcon.classList.add("fa-angle-double-right")
                } else {
                    cardHeaderIcon.classList.remove("fa-angle-double-right")
                    cardHeaderIcon.classList.add("fa-angle-double-down")
                }
            })
        }
    }
})
