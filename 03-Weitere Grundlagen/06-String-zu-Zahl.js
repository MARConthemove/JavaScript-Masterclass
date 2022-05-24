'use strict'

let s = '3.141'

// String in eine Ganzzahl
console.log(parseInt(s, 10))

// String in eine Kommazahl umwandeln
console.log(parseFloat(s))

// Achtung beim Rechnen mit Kommazahlen!
let result = (50.35 % 6) - 2.35
console.log(result)

let result2 = (1 / 99) * 55
console.log(result2)

// Lösung: Kommazahlen vermeiden!
let result3 = (5035 % 600) - 235
console.log(result3)

// Zahl zu String
let n = 3.145
console.log('' + n)
console.log(n.toExponential())
console.log(n.toFixed(2))
console.log(n.toPrecision(2))
d
