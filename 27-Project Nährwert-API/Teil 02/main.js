'use strict'

// Konzept: Liveselectoren!

function on(selector, eventType, cb) {
    document.addEventListener(eventType, (event) => {
        let element = event.target

        while (element) {
            if (element.matches(selector)) {
                return cb({
                    handleObj: element,
                    originalEvent: event,
                })
            }
            element = element.parentElement
        }
    })
}

window.addEventListener('DOMContentLoaded', () => {
    on('.close', 'click', (event) => {
        console.log('event: ', event)
    })

    on('.product-amount', 'change', (event) => {
        console.log('event: ', event)
        console.log("new Amount: ", event.handleObj.value)
    })
})
