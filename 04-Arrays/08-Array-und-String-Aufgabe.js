'use strict'

let students = 'Max, Monika, Erika, Moritz, Anton'

// Hier steht einfach nur ein Satz drinnen - die \x-Schreibweise
// ist nur eine andere Schreibweise für einen Buchstaben / Zeichen.
// Später (bitte noch nicht jetzt!) kannst du dir den Inhalt dieser
// Variablen auch per console.log ausgeben!
let sentence =
  '\x49\x63\x68\x20\x6D\xF6\x63\x68\x74\x65\x20\x4A\x61\x76\x61\x53\x63\x72\x69\x70\x74\x20\x6C\x65\x72\x6E\x65\x6E\x21'

// Aufgabe
//
// 1) Erika musste ihren Sprachkurs absagen. Entferne sie aus dem
//    String students!
//
//    Zerlege dazu den String in ein Array mit den einzelnen Teilnehmern,
//    finde dann heraus, an welcher Stelle der Teilnehmer "Erika"
//    im Array vorkommt, entferne diesen Teilnehmer aus dem Array,
//    und setze die Teilnehmer wieder zurück zu einem String zusammen!

let studentsArray = students.split(", ")
console.log(studentsArray)

let erikaIndex = studentsArray.indexOf("Erika")
console.log(erikaIndex)

studentsArray.splice(erikaIndex, 1)
console.log(studentsArray)

let newStudentArray = studentsArray.join(", ")
console.log(newStudentArray)

// 2) Die Liste soll jetzt ausgedruckt werden. Zerlege dazu wieder
//    die Liste in ein Array, und setze sie wieder zu einem String zusammen,
//    sodass folgende Ausgabe erzeugt wird:
//     - Max
//     - Monika
//     - Moritz
//     - Anton
//
//    Tipp: Ein Zeilenumbruch ist ein ganz normales Zeichen - ein \n!

let studentsTwoArray = students.split(", ")
console.log(studentsTwoArray)

console.log("- " + studentsTwoArray[0] + "\n- " + studentsTwoArray[1] + "\n- " + studentsTwoArray[2] + "\n- " + studentsTwoArray[3])

// 3) Zähle die Wörter in der Variable "sentence"! Versuche dabei,
//    dir den Inhalt der Variable erst nach der Aufgabe anzuschauen!
//
//    Tipp: Du kannst hierfür die .split()-Methode verwenden! Wie?

let sentenceArray = sentence.split(" ")
console.log(sentenceArray.length)

