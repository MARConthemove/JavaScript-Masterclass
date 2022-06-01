"use strict"

// Hinweis: Das ist nur ein Teil der Aufgaben, mit denen du
// den Umgang mit Objekten üben wirst! Im nächsten Abschnitt
// zum Thema JSON wirst du dir noch intensiver den Umgang
// mit Objekten anschauen.

// Aufgabe 1
//
// Unser Wörterbuch aus der letzten Aufgabe soll in ein Objekt
// umgewandelt werden!
//
// Das Ziel ist, dass in der Variable "DE_TO_EN" ein Objekt
// drinnen steht: {"hallo": "hello", "heute": "today",...}.
//
// Schreibe also Code, der die beiden Variablen "LANGUAGE_DE" und
// "LANGUAGE_EN" zu dem Objekt in der Variable "DE_TO_EN"
// zusammenführt.
//
// Du wirst hierzu Schleifen benötigen. Denke dran, dass du nach-
// träglich Eigenschaften zu einem Objekt hinzufügen kannst!
//
// Warum machen wir das alles?
//
//    Wenn wir dieses Objekt einmal aufgebaut haben, können wir
//    damit noch effizienter Übersetzungen durchführen.
//
//    Wenn das Objekt DE_TO_EN einmal aufgebaut ist, ist dieser
//    Code ausgesprochen effizient!
//
//      >> console.log(DE_TO_EN["hallo"]) // Gibt "hello" aus!
//
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

let DE_TO_EN = {}

for (const i in LANGUAGE_DE) {
    const wordDe = LANGUAGE_DE[i]
    const wordEn = LANGUAGE_EN[i]

    DE_TO_EN[wordDe] = wordEn
}

console.log("DE_TO_EN:", DE_TO_EN)

// Schreibe deinen Code hier, der das Objekt "DE_TO_EN" befüllt!

// Aufgabe 2
//
// Die Teilnehmerliste für einen Sprachkurs wird jetzt als Array
// geführt, das wiederum ein Objekt pro Teilnehmer enthält:
//
const students = [
    { firstname: "Max", lastname: "Mustermann", age: 21 },
    { firstname: "Laura", lastname: "Müller", age: 25 },
    { firstname: "Julia", lastname: "Schreiber", age: 30 },
    { firstname: "Tobias", lastname: "Lieb", age: 19 }
]
// 2a) Die Sprachschule hat eine Marketing-Agentur engagiert, die
//     jetzt erstmal Marktforschung betreibt.
//
//     Der Chef beauftragt uns / dich, das durchschnittliche Alter
//     der Teilnehmer zu berechnen. Diese Berechnung soll natürlich
//     mit Hilfe von JavaScript-Code durchgeführt werden!

let ageSum = 0
for (const student of students) {
    ageSum += student.age
}
console.log("Durchschnittsalter:", ageSum / students.length)

// 2b) Füge einen neuen Teilnehmer mit dem Namen "Christian Schmidt"
//     hinzu. Lasse bei diesem Teilnehmer die Eigenschaft "age" weg -
//     wir wissen das Alter noch nicht.

students.push({
    firstname: "Christian",
    lastname: "Schmidt"
})
console.log("students:", students)

// 2c) Funktioniert der Code aus Teilaufgabe 2a) noch, auch wenn er
//     auf der jetzt aktualisierten Teilnehmerliste ausgeführt wird?
//     Wenn nicht, passe den Code so an, dass er damit klarkommt,
//     dass bei einem (oder mehreren) Teilnehmern das Alter nicht
//     angegeben ist.
//
//     PS: So enstehen übrigens oft Bugs: Wenn man Code zum ersten
//         mal schreibt (2a), geht man von Dingen aus, die erstmal
//         immer erfüllt sind - später (Teilaufgabe 2b) ändern
//         sich diese Voraussetzungen, und der Code läuft nicht
//         mehr korrekt durch!
//


let ageSum2 = 0
let studentsWithAge = 0
for (const student of students) {
    if (student.age) {
        ageSum2 += student.age
        studentsWithAge++
    }
}
if (studentsWithAge === 0) {
    console.log("Durchschnittsalter konnte nicht berechnet werden")
}
else {
    console.log("Durchschnittsalter:", ageSum2 / studentsWithAge)
}

