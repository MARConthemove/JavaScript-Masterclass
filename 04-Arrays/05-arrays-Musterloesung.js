'use strict'

// Hier werden die Teilnehmerlisten für 2 Sprachkurse definiert.
// Die \x-Schreibweise ist nur eine andere Schreibweise für normale
// Buchstaben - sie diehnt dazu, dass du nicht schon vorab siehst,
// welcher Teilnehmer in welchem Kurs ist.
//
// \x58 stünde z.B. für ein X.
//
// *Challenge*: Versuche, die Aufgabe zu lösen, ohne dir die Variable
// "english1" oder "english2" auszugeben!
//
// Ein console.log(english1.length) oder so ist aber vollkommen okay.
// Versuche nur, ein console.log(english1) oder console.log(english2)
//  zu vermeiden!

let english1 = [
  '\x4C\x75\x7A\x69\x61',
  '\x4B\x69\x61\x6E\x61',
  '\x42\x65\x6E\x65\x64\x65\x74\x74\x6F',
  '\x47\xFC\x6E\x74\x68\x65\x72',
]

let english2 = [
  '\x57\x69\x62\x6B\x65',
  '\x4A\x65\x61\x6E\x6E\x65\x74\x74\x65',
  '\x50\x61\x75\x6C',
]

// Aufgabe!
//
// Bei einer Sprachschule werden 2 English-Kurse unterrichtet.
//
// a) Monika möchte unbedingt mit ihrem Freund "Paul" einen
//    Sprachkurs belegen. Finde dazu heraus, in welchen Sprachkurs
//    "Paul" belegt hat, und füge sie ans Ende der Teilnehmerliste
//    zu diesem Kurs hinzu! Verwende dazu nicht die .splice()-Funktion!

console.log(english1.indexOf('Paul'))
console.log(english2.indexOf('Paul'))
english2.push('Monika')

// b) "Günther" hat eben angerufen, und muss seinen Sprachkurs
//    absagen. Finde heraus, in welchem Kurs er eingeschrieben war,
//    ermittle seine Position in der Teilnehmerliste, und entferne
//    ihn aus der Liste.
//
//    Stelle sicher, dass "Günther" aus der Liste entfernt wurde -
//    geht das, ohne die gesamte Liste per console.log auszugeben?

console.log('-'.repeat(20))

console.log(english1.indexOf('Günther'))
console.log(english2.indexOf('Günther'))

let gIndex = english1.indexOf('Günther')
english1.splice(gIndex, 1)

console.log(english1.indexOf('Günther'))
console.log(english2.indexOf('Günther'))

// c) Damit vor der Klasse die Anwesenheit kontrolliert werden kann,
//    müssen die beiden Teilnehmerlisten sortiert werden. Stelle
//    dies sicher!

console.log('-'.repeat(20))

english1.sort()
english2.sort()

// d) Ganz spontan möchte noch "Anton" am Sprachkurs teilnehmen.
//    Sein Name beginnt glücklicherweise mit "A"... Füge ihn daher
//    an den Anfang der Liste vom Sprachkurs "english1" hinzu!

console.log('-'.repeat(20))
english1.splice(0, 0, 'Anton')

//
// e) Wie viele Teilnehmer sind jetzt in der Liste "english1" bzw.
//    "english2"? Versuche erst jetzt, dir die Liste auszugeben und
//    das Verhalten vom Programm mit console.log-Befehlen nachzu-
//    vollziehen!

console.log('-'.repeat(20))
console.log(english1.length)
console.log(english2.length)

console.log(english1)
console.log(english2)
