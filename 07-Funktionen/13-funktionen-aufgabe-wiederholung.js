"use strict"

// Aufgabe 1
// 1a)

const courses = [
    ["Christian", "Annika"], // Kurs 1 mit 2 Teilnehmern
    ["Julian", "Lisa", "Tobias"] // Kurs 2 mit 3 Teilnehmern
]

/**
 * Ermittelt den Index des Kurses mit der geringsten Anzahl an Teilnehmern
 * @returns {number} Index des Kurses
 */
function getSmallestCourse() {
    let smallestIndex = 0
    // i = 0; i = 1; courses.length = 2
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].length < courses[smallestIndex].length) {
            smallestIndex = i
        }
    }
    return smallestIndex
}
// Testing:
console.log("1a) Index smallest course:", getSmallestCourse())

// 1b)

/**
 * Füge einen Teilnehmer zum Sprachkurs mit am wenigsten Usern bisher
 * hinzu
 *
 * @param {string} name Der Teilnehmer der hinzugefügt werden soll
 *
 * @returns {void}
 */
function addStudent(name) {
    const smallestCourse = getSmallestCourse()

    courses[smallestCourse].push(name)
}
// Testing:
addStudent("Marc")
console.log(courses)

// Aufgabe 2

const LANGUAGE_DE = [
    "hallo",
    "heute",
    "sprachkurs",
    "willkommen",
    "mikrofon",
    "und"
]

const LANGUAGE_EN = [
    "hello",
    "today",
    "language course",
    "welcome",
    "microphone",
    "and"
]

// 2a)

/**
 *  Soll ein Wort übersetzen, falls keine Übersetzung gefunden wird soll das gleiche Wort wieder ausgegeben werden.
 *
 * @param {string} word Zu übersetzendes Wort
 */
function translateWord(word) {
    word = word.toLowerCase()

    for (const i in LANGUAGE_DE) {
        const currentWord = LANGUAGE_DE[i]

        if (currentWord === word) {
            return LANGUAGE_EN[i]
        }
    }

    return word
}

console.log(translateWord("Mikrofon"))
console.log(translateWord("Sprachkurs"))

// 2b)

/**
 * Wandelt den ersten Buchstaben eines Wortes in einen Großbuchstaben um
 *
 * @param {string} word Zu umwandelndes Wort
 *
 * @returns {string}
 */
function ucFirst(word) {
    let firstLetter = word[0]
    let rest = word.slice(1, word.length)

    return firstLetter.toUpperCase() + rest
}


// 2c)

/**
 * Übersetzt einen Satz und schreibt den ersten Buchstaben des Satzes groß
 *
 * @param {string} sentence Zu übersetzender Satz
 *
 * @returns {string} Rückgabe Satz übersetzt
 */
function translateSentence(sentence) {
    let words = sentence.split(" ")

    const translatedWords = []
    for (const word of words) {
        const translatedWord = translateWord(word)
        translatedWords.push(translatedWord)
    }
    const translatedSentence = translatedWords.join(" ")
    return ucFirst(translatedSentence)
}

console.log(translateSentence("ich werde heute den sprachkurs mit meinem mikrofon belegen"))
