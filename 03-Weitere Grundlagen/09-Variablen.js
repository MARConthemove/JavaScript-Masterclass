'use strict'

// Variablen können auch über "var" angelegt werden - aber Achtung,
// var verhält sich manchmal etwas "komisch".
//
// Heutzutage würde ich dir empfehlen, immer "let" oder "const"
// zu verwenden!
var str = 'Hallo Welt'
console.log(str)

// Variablen, die mit "const" angelegt wurden, können nachträglich
// nicht mehr verändert werden.
const greeting = 'Hallo Welt'
// Das hier ist nicht erlaubt: greeting = "Hallo Mars!"
console.log(greeting)
