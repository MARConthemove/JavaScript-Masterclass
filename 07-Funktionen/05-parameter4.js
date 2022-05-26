'use strict'

let message = 'Test!'

function sayHello(name) {
  const message = 'Hallo ' + name + '!'
  console.log(message)
}

/*
function sayHello(name) {
  message = "Hallo " + name + "!"
  console.log(message)
}
*/

sayHello('Max')
console.log(message)
