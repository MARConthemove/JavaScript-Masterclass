'use strict'

const numbers = [1, 2, 3, 4]

const students = [
  { firstname: 'Max', lastname: 'Mustermann' },
  { firstname: 'Erika', lastname: 'Mustermann' },
  { firstname: 'Tobias', lastname: 'Mustermann' },
]

/*
const numbers2 = []
for (const n of numbers) {
  numbers2.push(n * 2)
}
*/

// const numbers2 = numbers.map((value) => value * 2)

const numbers2 = numbers.map((value) => {
  return value * 2
})

const names = students.map((value, i) => {
  return `${i + 1}: ${value.firstname} ${value.lastname} `
})

console.log('numbers: ', numbers)
console.log('numbers2: ', numbers2)
console.log('names: ', names)
