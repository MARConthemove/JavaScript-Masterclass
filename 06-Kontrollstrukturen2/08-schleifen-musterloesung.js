'use strict'

// Aufgabe 1:
//
// Strafaufgabe für einen Schüler an der Sprachschule!
// Er soll 25x schreiben: "Ich soll im Unterricht nicht stören".
//
// Schreibe ein kleines Programm, was dies für den Schüler
// erledigt ;)
for (let i = 0; i < 25; i++) {
  console.log('Ich soll im Unterricht nicht stören')
}

// Aufgabe 2: Sprachschule
//
// Ein Kurs ist zu groß geworden. Teile die Teilnehmer daher
// gleichmäßig in 2 Kurse auf!
//
// Sorge dafür, dass dein Code auch mit anderen Kursgrößen
// funktioniert!
//
// Hinweis: Hier gibt es verschiedene Lösungswege - solange
// der Kurs in 2 Kurse aufgeteilt wird, die ungefähr gleich
// groß sind, ist deine Lösung richtig!
//
// Tipp: Modulo!
const students = ['Max', 'Monika', 'Franziska', 'Bernd', 'Tobias', 'Andreas']

const students1 = []
const students2 = []

for (const i in students) {
  if (i % 2 === 0) {
    students1.push(students[i])
  } else {
    students2.push(students[i])
  }
}
console.log('students1', students1)
console.log('students2', students2)

// Aufgabe 3
//
// Für eine Sprachschule soll ein Preisrechner entwickelt werden,
// der den Gesamtpreis bis hin zu einem bestimmten Level berechnet.
//
// Beispiel: Für das Level levels[0] = A1 beträgt der Preis exakt
// prices[0] = 400€.
//
// Für jeden Index kannst du also in der Variable "levels" nachschauen,
// wie dieses Level bezeichnt wird, und in der Variable "prices",
// wie viel dieses Kostet.
//
// Schreibe den Code für die folgenden Teilaufgaben möglichst universell,
// sodass wir z.B. ein Level A3 noch dazwischen schalten können, indem
// wir nur die Listen "levels" und "prices" anpassen!
//
// a) Wie viel kostet es für einen Teilnehmer, die Sprache bis
//    einschließlich des Levels "C1" zu lernen? Schreibe deinen Code so
//    universell, dass er auch mit anderen Level-Bezeichnungen / Preisen
//    zurecht käme.
//
// b) Wie viel kostet es, einen Teilnehmer von (einschließlich) A2 bis
//    einschließlich C1 zu bringen?
//
// c) Ein Teilnehmer möchte (maximal) 1500€ in seine Sprachkenntnisse
//    investieren. Bis zu welchem Level (bei A1 angefangen) können wir
//    ihn dafür unterrichten?

let levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
let prices = [400, 500, 550, 600, 650, 700]

// Teilaufgabe A
let costsUntilC1 = 0
for (const i in levels) {
  const level = levels[i]
  const price = prices[i]

  costsUntilC1 += price

  if (level === 'C1') {
    break
  }
}
console.log('Teilaufgabe A:', costsUntilC1)

// Teilaufgabe B
let costsFromA2ToC1 = 0
let levelA2Seen = false

for (const i in levels) {
  const level = levels[i]
  const price = prices[i]

  if (level === 'A2') {
    levelA2Seen = true
  }

  if (levelA2Seen) {
    costsFromA2ToC1 += price
  }

  if (level === 'C1') {
    break
  }
}
console.log('Teilaufgabe B:', costsFromA2ToC1)

// Teilaufgabe C
let priceSoFar = 0
for (const i in levels) {
  const level = levels[i]
  const price = prices[i]

  if (priceSoFar + price >= 1500) {
    // Der Teilnehmer kann sich den aktuell betrachteten Kurs
    // nicht mehr leisten.
    console.log(
      'Wir können bis einschließlich hierhin unterrichten:',
      levels[i - 1]
    )
    break
  }

  priceSoFar += price
}

// Aufgabe 4
//
// Unsere Sprachschule wächst dank unserer Hilfe immer weiter.
// Inzwischen sollen weitere Kurse hinzugefügt werden, und unser
// Code soll darauf vorbereitet werden.
//
// Die Teilnehmer werden ja pro Kurs gespeichert. Bisher hatten
// wir dafür immer separate Variablen verwendet.
//
// Hier in dem Beispiel wäre das in der Schreibweise von vorher,
// students1 wäre der erste Kurs, students2 der Zweite:
//  >> let students1 = ["Max", "Monika"]
//  >> let students2 = ["Erik", "Erika"]
//
// Damit die Sprachschule wachsen kann, wird die Struktur in eine
// verschachtelte Liste umgestellt. Dadurch kann später ein 3.
// Kurs hinzugefügt werden:
let studentsPerCourse = [
  ['Max', 'Monika'], // Erster Kurs
  ['Erik', 'Erika'], // Zweiter Kurs
]
// Aufgaben:
//
//  a) Berechne die Anzahl der Teilnehmer in allen Kursen zusammen!

let num = 0
for (const course of studentsPerCourse) {
  num += course.length
}
console.log('Aufgabe 4, a:', num)

//  b) Der Teilnehmer "Max" musste seinen Sprachkurs absagen. Schreibe
//     ein Programm, was ihn aus seinem Kurs entfernt. Dieses Programm
//     soll auch in der Lage sein, z.B. "Erika" aus ihrem entsprechenden
//     Kurs entfernen zu können.
//
//     Sorge auch dafür, dass wenn z.B. "Jens" seinen Sprachkurs absagen
//     muss, dass darauf hingewiesen wird, dass Jens nicht ausgetragen
//     werden konnte, da er ja gar nicht eingeschrieben ist.
//
// Wichtig: Schreibe den Code so, dass er später auch mit 3 oder mehr
// Sprachkursen zurechtkommt!

const studentToCancel = 'Max'
let studentFound = false

for (const course of studentsPerCourse) {
  if (course.indexOf(studentToCancel) !== -1) {
    const posStudentToCancel = course.indexOf(studentToCancel)
    course.splice(posStudentToCancel, 1)

    studentFound = true
    break
  }
}
console.log('Aufgabe 4, B:', studentsPerCourse)

if (studentFound === false) {
  console.log('Aufgabe 4, B: Kein Teilnehmer entfernt')
}

// Bonus-Aufgabe:
//
//  c) Ein neuer Teilnehmer soll eingeschrieben werden. Schreibe ein
//     Programm, welches diesen neuen Teilnehmern in den Sprachkurs
//     platziert, der bisher noch am wenigsten Teilnehmer hat.
//
//     Wie geht dein Programm mit dem Fall um, dass 2 Sprachkurse
//     genau gleich viele Teilnehmer haben? Ist das Verhalten
//     für eine Sprachschule akzeptabel?

let indexLeastStudents = -1
for (const i in studentsPerCourse) {
  const course = studentsPerCourse[i]

  if (indexLeastStudents === -1) {
    indexLeastStudents = i
  } else {
    if (course.length < studentsPerCourse[indexLeastStudents].length) {
      indexLeastStudents = i
    }
  }
}
console.log('Aufgabe 4, C:', indexLeastStudents)
