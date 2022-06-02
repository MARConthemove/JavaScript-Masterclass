"use strict"

// 1. Art
// function declaration
function sayHello() {
    console.log("sayHello!")
}
sayHello()

// 2. Art, anonyme Funktion
// Man sagt: function expression
const sayHello2 = function() {
    console.log("sayHello2!")
}
sayHello2()

// 3. Art, Fat Arrow Funktion
// Man sagt: function expression
const sayHello3 = () => {
    console.log("sayHello3!")
}
sayHello3()

// In JavaScript besonders:

// Eine Funktion ist ein Wert einer bestimmten Variablen! (besonders)
