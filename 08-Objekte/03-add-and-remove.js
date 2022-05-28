"use strict"

const student = {
    name: "Max Mustermann",
    age: 21
}

student.language = "Englisch"

console.log("#1 student: ", student)

delete student.language

console.log("#2 student: ", student)

