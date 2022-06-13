"use strict"

const StudentModule = require("./04-Part04")

test("It should add a student if not exist", () => {
    const studentModule = new StudentModule()

    studentModule.addStudent("Max Müller")

    expect(studentModule.students.length).toBe(1)
    expect(studentModule.students).toContain("Max Müller")
})

test('Should not add a student twice', () => {
    const studentModule = new StudentModule()

    studentModule.addStudent('Max Müller')
    studentModule.addStudent('Max Müller')

    expect(studentModule.students.length).toBe(1)
    expect(studentModule.students).toContain('Max Müller')
})
