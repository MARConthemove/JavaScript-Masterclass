"use strict"

let plus5


// Die ausführliche Schreibweise für eine anonyme Funktion
plus5 = (a) => {
    return a + 5
}
console.log(plus5(4))


// Wenn die Funktion exakt einen Parameter hat (wichtig!!!),
// lässt man oft die runden Klammern weg
plus5 = a => {
    return a + 5
}
console.log(plus5(4))

// Wenn eine Funktion nur aus einer Codezeile besteht,
// können wir die geschweiften Klammern sowie das return
// weglassen...
plus5 = a => a + 5
console.log(plus5(4))
