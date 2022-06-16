'use strict'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const number2 = numbers
  .filter(value => value % 2 === 0)
  .map(value => value * 20)

console.log(number2)
