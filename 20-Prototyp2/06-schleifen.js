"use strict"

// constructor function
function Student(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
}

// prototype
Student.prototype.getName = function () {
    return this.firstname + " " + this.lastname
}

// creating a new student instance object
const student = new Student("Max", "Müller")

for (const key in student) {
    if (student.hasOwnProperty(key)) {
        console.log("key:", key)
    }
}
debugger
