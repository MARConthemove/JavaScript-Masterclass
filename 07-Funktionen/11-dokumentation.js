"use strict"

const items = [15, 25, 30]
/**
 * Berechnet die Summe der Zahlen in einer Liste
 * @param {number[]} liste Die Liste die aufsummiert wird
 * @returns {number} Die komplette Summe
 */
function summe(liste) {
    let s = 0
    for (let element of liste) {
        s += element
    }
    return s
}

let itemsSum = summe(items)
console.log(itemsSum === 70)

/**
 * Gibt ein Wort zurück
 * @param {string} word
 * @returns {string} Rückgabewert als String der Funktion
 */
function test(word) {
    word.toUpperCase()
    return word
}
