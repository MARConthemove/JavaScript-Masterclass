"use strict"

// Wir lesen die "data.json"-Datei ein!
//
// ACHTUNG: fs.readFileSync() ist i.d.R. ein Anti-Pattern und
//          ziemlich langsam. Darauf gehen wir aber noch ein :)

// "fs" steht für FileSystem und ist ein Node.js Module

const fs = require("fs")
const data = fs.readFileSync("01-data.json", {encoding: "utf-8"})

console.log("data:", data)
console.log("typeof data:", typeof data)

const dataObj = JSON.parse(data)
console.log("dataObj[0]:", dataObj[0])
