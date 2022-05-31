"use strict"

const student = {
    name: "Max Mustermann",
    age: 21,
    enrolled: false,
    numberOfCourses: 0
}

if (student.numberOfCourses) {
    console.log("Hallo Welt!")
}

if ("numberOfCourses" in student) {
    console.log("numberOfCourses in student")
}
