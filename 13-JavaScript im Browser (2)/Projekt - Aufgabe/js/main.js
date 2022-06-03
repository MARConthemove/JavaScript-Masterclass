"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const helpElements = document.querySelectorAll("[data-help]")
    for (const helpElement of helpElements) {
        helpElement.addEventListener("click", (event) => {
            event.preventDefault()

            const helpText = helpElement.attributes["data-help"].value
            alert(helpText)
        })
    }

    const cardHeaders = document.querySelectorAll(".card-header")

    for (const cardHeader of cardHeaders) {
        if (cardHeader instanceof HTMLElement) {
            cardHeader.addEventListener("click", (event) => {
                event.preventDefault()

                const cardBody = cardHeader.nextElementSibling
                cardBody.classList.toggle("d-none")
            })
        }
    }
})
