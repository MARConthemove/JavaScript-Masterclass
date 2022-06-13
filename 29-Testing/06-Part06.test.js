"use strict"

beforeEach(() => {
    document.body.innerHTML = "<button id='counter'>0</button>"
})

test("It should increment the counter", () => {
    const button = document.getElementById("counter")
    expect(button.textContent).toBe("0")

    require("./06-Part06.js")

    button.click()

    expect(button.textContent).toBe("1")

})
