"use strict"

const { students, addStudent } = require("./03-Part03")

beforeEach(() => {
    students.splice(0, students.length)
    students.push("Max Mustermann")
})

test("It should add a student if he not already exists", () => {
    addStudent("Max Müller")

    expect(students.length).toBe(2)
    expect(students).toContain("Max Müller")
})

test("It should not add another student to the array if he already exists", () => {
    addStudent("Max Mustermann")

    expect(students.length).toBe(1)
})
