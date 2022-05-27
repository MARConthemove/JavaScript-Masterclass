"use strict"

// Aufgabe 1
//
// Die Sprachschule, die wir betreuen, hat herausgefunden,
// dass es Funktionen gibt!
//
// Die Kurse, die aktuell gerade unterrichtet werden,
// sind in der Variable "courses" gespeichert.
//
// Wir sollen daher ein paar Funktionen schreiben, die die
// Arbeit mit den Teilnehmern der Kurse erleichtern:
//
// 1a) Ergänze die Funktion, die ermittelt, welcher Kurs
//     bisher am wenigsten Teilnehmer hat.
//
//     Wenn 2 Kurse genau gleich viele Teilnehmer haben, ist
//     es egal, welcher Index zurückgegeben wird.
//
//     Beispiel (für die Variable "courses" von oben):
//      >> console.log(getSmallestCourse())
//      >> Rückgabewert: 0, weil der 1. Kurs (Kurs mit Index 0) am
//                       wenigsten Teilnehmer hat
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
console.log("1a) Index smallest course:", getSmallestCourse())

// 1b) Ergänze die Funktion, die einen Teilnehmer in den Kurs
//     einfügt, der bisher am wenigsten Teilnehmer hat!
//     Wir nutzen hier das Ergebnis aus Teilaufgabe 1a weiter!

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

addStudent("Marc")
console.log(courses)

// Aufgabe 2
//
// Mit Hilfe von Funktionen sollen wir ein einfaches Wörterbuch
// entwickeln.
//
// Die entsprechenden Sprachbausteine findest du in den Variablen
// "LANGUAGE_DE" bzw. "LANGUAGE_EN". Das sind übrigends ganz normale
// Variablennamen, und mit der kompletten Großschreibung deuten wir
// für andere Programmierer nochmal zusätzlich an, dass diese Variablen
// nie abgeändert werden sollen.

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

// Die Indexe stimmen jeweils überein, also LANGUAGE_DE[0]
// enthält das gleiche Wort in Deutsch, wie LANGUAGE_EN[0]
// auf Englisch.
//
// Hinweis: Der Code den wir hier schreiben, der wird zwangs-
// läufig eher ineffizient. Später lernst du noch mit Objekten
// eine sehr viel "effizientere" Möglichkeit für solche
// Nachschlage-Aktionen kennen!
//
// 2a) Ergänze die Funktion, die ein einzelnes Wort von
//     Deutsch nach Englisch übersetzt. Diese Funktion
//     soll das englische Wort über ein "return"
//     zurückgeben.
//
//     Wichtig: Bitte beachte hier Groß- und Kleinschreibung.
//     Das Wörterbuch liegt ausschließlich in Kleinbuchstaben
//     vor - das Wort, was hier übergeben wird, musst
//     du also noch mit .toLowerCase() umwandeln!
//
//     Kann ein Wort nicht übersetzt werden, so soll 1:1
//     das deutsche Wort zurückgegeben werden.
//
//     >> translateWord("Sprachkurs")
//     >> // Rückgabewert: "language course"
function translateWord(word) {

}

// 2b) Schreibe eine Funktion, die den ersten Buchstaben eines
//     Wortes in Großbuchstaben umwandeln kann.
//
//     Bezüglich des Funktionsnamens, uc = uppercase, d.h.
//     ucFirst = "mach' den ersten Buchstaben in Uppercase"
//
//     Tipp: Zerlege hierfür das Wort, einmal in den ersten Buchstaben,
//     und einmal in den Rest des Wortes / Strings.
//
//     Wandle anschließend den ersten Buchstaben in Großbuchstaben um
//     (.toUpperCase()), und baue den String wieder zusammen!
//
//     Beispiel:
//      >> ucFirst("sprachschule")
//      >> // Rückgabewert: "Sprachschule"
//
//     Das Ergebnis soll per "return" zurückgegeben werden

function ucFirst(word) {

}

// 2c) Aufbauend den Funktionen aus 2a und 2b, entwickle eine weitere
//     Funktion, die einen ganzen Satz übersetzen kann!
//
//     Zerlege dazu den Satz in Wörter, übersetze diese einzeln
//     und setze den Satz wieder zusammen!
//
//     Zudem stelle sicher, dass der erste Buchstabe des Satzes in
//     Großbuchstaben geschrieben wird!
//
//     Beispiel:
//     >> translateSentence("Hallo und willkommen beim Sprachkurs")
//     >> // Rückgabewert: "Hello and welcome beim language course"
//
//    Hinweis:
//      Es geht hier nur um eine "rudimentäre" Übersetzung, das
//      siehst du auch am Sprachfehler, das Wort "beim" wurde einfach 1:1
//      übernommen.
//      Tatsächliche Übersetzungstools sind sehr viel komplexer,
//      inzwischen so komplex, dass i.d.R. selbstlernende Programme wie z.B.
//      Neuronale Netze verwendet werden. Die würde man dann aber eher in
//      C++ oder Python entwickeln als in JavaScript.

function translateSentence(sentence) {

}
