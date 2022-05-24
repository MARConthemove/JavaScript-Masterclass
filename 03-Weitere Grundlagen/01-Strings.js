"use strict"

// Variable
let greeting = ' ---Hallo Welt!--- '

// Die Anzahl der Zeichen in einem String
console.log(greeting.length)
console.log(greeting)

// Ein einzelnes Zeichen abfragen
console.log(greeting.charAt(4))
console.log(greeting[4])

// Wo findet sich ein Zeichen in einem String?
console.log(greeting.indexOf("H"))
console.log(greeting.indexOf("---", 10)) // Suche nach --- aber erst am Pos. 10

// Großbuchstaben bzw. Kleinbuchstaben
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())

// Text ersetzen
console.log(greeting.replace("!", "!!!"))

// Zeichen rechts und links vom String entfernen
console.log(greeting.trim())


console.log(greeting)
// Die Variable wird oben nicht verändert
greeting = greeting.toUpperCase()
console.log(greeting)
