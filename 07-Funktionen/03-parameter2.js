'use strict'

// Wir definieren eine erste Funktion
function sayHello(name, language) {
  if (language === 'de') {
    console.log('Hallo ' + name + '!')
  } else if (language === 'en') {
    console.log('Hello ' + name + '!')
  }
}

sayHello('Max', 'de')
sayHello('Erika', 'de')
sayHello('Erika', 'en')
