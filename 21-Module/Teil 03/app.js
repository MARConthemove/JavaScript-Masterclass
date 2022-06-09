"use strict"

// bei mehrmaligem aufruf merkt sich node diese objecte und führt den befehl nur einmal aus!
const studentsModule = require("./students")
const studentsModule2 = require("./students")

console.log(studentsModule)
console.log(studentsModule2)
/*
const f = require("./a")

f.f()
*/
