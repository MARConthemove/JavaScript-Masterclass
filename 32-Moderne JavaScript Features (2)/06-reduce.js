'use strict'

const numbers = [5, 6, 3, 2, 8, 9, 3, 1, 4]

// Summe
const sum = numbers.reduce((prev, cur) => {
  return prev + cur
}, 0)

console.log('sum: ', sum)

// Minimum
const min = numbers.reduce((prev, cur) => {
  if (prev < cur) return prev
  else return cur
}, Number.MAX_SAFE_INTEGER)

console.log('min: ', min)

// Anzahl Zahlen >= 5
const i = numbers.reduce((prev, cur) => {
  if (cur >= 5) {
    return prev + 1
  }
  return prev
}, 0)

console.log('i: ', i)

// Minimales Alter berechnen
const students = [{ age: 25 }, { age: 30 }, { age: 35 }]

const m2 = students.reduce((prev, cur) => {
  if (cur.age <= prev) return cur.age
  return prev
}, Number.MAX_SAFE_INTEGER)

console.log('m2: ', m2)

// or:
const m3 = Math.min(...students.map((student) => student.age))

console.log("m3: ", m3)
