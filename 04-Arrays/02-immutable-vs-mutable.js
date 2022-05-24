"use strict"

// Strings sind Immutable (unveränderlich!)
let greeting = "Hallo Welt"
greeting = greeting + "!"
console.log(greeting)

// Aber Arrays sind mutable (veränderlich!)
let students = ["Max", "Moritz"]
let copy = students
students.push("Joker")
console.log(copy)

// Mutable und const...
const students2 = ["Max", "Moritz"]
students2.push("Joker")
console.log("students2", students2)

// Verboten:
students2 = ["Test"] // Error
