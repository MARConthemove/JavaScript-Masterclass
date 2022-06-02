"use strict"

const fs = require("fs")

/*
fs.readdir(__dirname, (err, files) => {
  console.log(files)
})
*/


// Thema Asynchrones JavaScript siehe Ausgabe!
console.log("A")

fs.readFile("03-daten.txt", { encoding: "utf-8" }, (err, data) => {
    console.log(data)
})

console.log("B")
