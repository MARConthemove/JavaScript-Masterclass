'use strict'

/**
 * Mit einem Array können wir z.B. eine komplette Teilnehmerliste
 * speichern!
 */
let students = [
  'Max Müller',
  'Erika Mustermann',
  'Annika Müller',
  'Max Mustermann',
]
console.log(students)

// Was ist der Typ von einem Array?
console.log(typeof students)

// Objekt ist in JavaScript alles, um herauszufinden ob es sich um ein Array handelt:
console.log(students instanceof Array)

// Wie viele Elemente sind in dem Array?
console.log('.length', students.length)

// Wie ein einzelnes Element zugreifen
console.log('[0]', students[0])

// Wenn ein Element nicht existiert, wird dies stillschweidgend
// ignoriert, und es wird nur "undefined" zurückgegeben
console.log('[100]', students[100])

// Element hinzufügen -> .push() verändert die Variable!
students.push('Joker', 'Joker 2')
console.log(students)

// Letztes Element entfernen
const lastElement = students.pop()
console.log("lastElement", lastElement)
console.log(students)

// Ein Element überschreiben
students[0] = "Maximilian Müller"
console.log(students)
