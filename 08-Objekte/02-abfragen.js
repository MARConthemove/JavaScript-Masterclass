"use strict"

const student = {
    name: "Max Mustermann",
    age: 21,
    language: "Englisch"
}
// Zum überschreiben von Einträgen:

// Äquivalent auch mit Schreibweise:
// student["age"] = 22
student.age = 22

// Funktioniert auch mit [" "] Schreibweise
console.log(student["name"])
console.log(student["age"])
console.log(student["language"])
console.log("-".repeat(20))
console.log(student)
