"use strict"

// Also possible:

// const part01 = require("./01-Part01")
// const add = part01.add

const {add} = require("./01-Part01")

test("It should calculate the sum of 5 + 8", () => {
    const result = add(5, 8)

    expect(result).toBe(13)
})

test("It should calculate the sum of 5 + 0", () => {
    const result = add(5, 0)

    expect(result).toBe(5)
})
