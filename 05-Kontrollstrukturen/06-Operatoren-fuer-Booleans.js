'use strict'

console.log('!true:', !true)
console.log('!false', !false)

// console.log(!(42 === 13))
// console.log(42 !== 13)

// Logisches UND
console.log('true && true:', true && true)
console.log('true && false:', true && false)
console.log('false && true:', false && true)
console.log('false && false:', false && false)

// Logisches ODER
console.log('true || true:', true || true)
console.log('true || false:', true || false)
console.log('false || true:', false || true)
console.log('false || false:', false || false)

// Beispiel!
let students1 = ['Max']
let students2 = ['Monika']

if (students1.indexOf('Erika') === -1 && students2.indexOf('Erika') === -1) {
  console.log('Erika ist weder Teilnehmer von students1 noch von students2')
}
