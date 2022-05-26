'use strict'

// Wir definieren eine erste Funktion

// Einem Parameter wird ein Standardwert übergeben
function sayHello(name, language = 'de') {
  if (language === 'de') {
    console.log('Hallo ' + name + '!')
  } else if (language === 'en') {
    console.log('Hi ' + name + '!')
  }
}

sayHello('Max')
sayHello('Erika')
sayHello('Erika', 'en')
