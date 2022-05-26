'use strict'

function sayHello() {
  console.log('Hallo')
  return 5
  console.log('Welt')
}
sayHello()

// indexOf
function indexOf(liste, value) {
  for (const i in liste) {
    if (liste[i] === value) {
      return i
    }
  }
  return -1
}

console.log(indexOf(['Hallo', 'Welt', '!'], '?'))
