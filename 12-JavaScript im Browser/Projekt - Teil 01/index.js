const amountClicks = document.getElementById("click-counter")
let counter = 0

document.getElementById("click").addEventListener("click", () => {
    counter++
    amountClicks.innerText = counter
})

document.getElementById("reset").addEventListener("click", () => {
    amountClicks.innerText = 0
    counter = 0
})
