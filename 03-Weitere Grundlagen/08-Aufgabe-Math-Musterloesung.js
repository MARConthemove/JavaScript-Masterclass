'use strict'

// Aufgabe 1:
//
// Für eine Tankstelle soll eine automatische Rückgeld-Ausgabe implementiert
// werden. Für dieses Beispiel soll ein Betrag von 15,37€ zurückgegeben werden.
//
// Wandle zuerst den Betrag in die englische Schreibweise um (15.37). Ersetze
// dazu mit Hilfe von .replace() das Komma durch einen Punkt.
//
// Lese anschließend den String mit Hilfe der parseFloat()-Funktion ein, und
// rechne ihn in Cent um.
//
// Gebe dann aus, mit welchen Münzen dieser Betrag bezahlt werden kann. Der
// Einfachheit halber wird dieser Betrag ausschließlich mit Münzen bezahlt
// (vereinfacht den Code etwas).
//
// Kombiniere dazu geschickt den Modulo, Rundungsfunktionen sowie ggf. den
// Rest. Versuche, zuerst große Münzen auszugeben!
//
// Tipp: Rechne den Betrag am besten zuerst in Cents um. Sonst treten leicht
// Rundungsfehler auf, die das Programm unnötig kompliziert machen!
//
// Natürlich soll das Programm so geschrieben werden, dass jeder
// Beliebige Betrag zurückgegeben werden kann.
//
// Beispielausgabe:
//  - 7x 2€ Münze
//  - 1x 1€-Münze
//  - 0x 50 Cent-Münze
//  - 1x 20 Cent-Münze
//  - 1x 10 Cent-Münze
//  - 1x 5 Cent-Münze
//  - 1x 2 Cent-Münze
//  - 0x 1 Cent-Münze

let amountStr = '15,37'

let amount = parseFloat(amountStr.replace(',', '.')) * 100

console.log(' - ' + Math.floor(amount / 200) + 'x 2€')
amount = amount - Math.floor(amount / 200) * 200

console.log(' - ' + Math.floor(amount / 100) + 'x 1€')
amount = amount - Math.floor(amount / 100) * 100

console.log(' - ' + Math.floor(amount / 50) + 'x 50 Cent')
amount = amount - Math.floor(amount / 50) * 50

console.log(' - ' + Math.floor(amount / 20) + 'x 20 Cent')
amount = amount - Math.floor(amount / 20) * 20

console.log(' - ' + Math.floor(amount / 10) + 'x 10 Cent')
amount = amount - Math.floor(amount / 10) * 10

console.log(' - ' + Math.floor(amount / 5) + 'x 5 Cent')
amount = amount - Math.floor(amount / 5) * 5

console.log(' - ' + Math.floor(amount / 2) + 'x 2 Cent')
amount = amount - Math.floor(amount / 2) * 2

console.log(' - ' + amount + 'x 1 Cent')

/////////////////////////////////////////////////////////////////////////////

// Aufgabe 2
//
// In Amerika ist es üblich, in Restaurants ca. 15-20% Trinkgeld zu geben.
// Schreibe ein Programmn welches ca. 15-20% Tringeld auf eine Restaurant-
// Rechnung aufschlägt.
//
// Versuche, dass der Betrag, der insgesamt bezahlt wird, möglichst nicht
// zu krumm ist.
//
// Kombiniere dazu geschickt die Rundungsfunktionen, Divisionen oder
// Multiplikationen.
//
// Zudem soll eine Ausgabe erfolgen, bei dem der Gesamtbetrag mit 2 Nachkommastellen
// ausgegeben wird. Beispiel: "Der Gesamtbetrag beträgt 20.00$"
//
// - Beispiel: Rechungsbetrag 17.00$    -> Der Gesamtbetrag beträgt 20.00$
// - Beispiel: Rechungsbetrag 16.50$    -> Der Gesamtbetrag beträgt 20.00$
// - Beispiel: Rechungsbetrag 10.00$    -> Der Gesamtbetrag beträgt 12.50$
//
// Das Programm muss nicht perfekt sein. Es reicht, wenn es ungefähr
// funktioniert!

let bill = 10
let billTotal = Math.ceil((bill * 1.1) / 2.5) * 2.5

console.log('Der Gesamtbetrag beträgt $' + billTotal.toFixed(2) + '.')
