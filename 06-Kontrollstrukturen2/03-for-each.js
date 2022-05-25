'use strict'

const students = ['Max', 'Erika', 'Monika']

for (let i = 0; i < students.length; i++) {
  console.log('i: ', i)
  console.log('Student: ', students[i])
}

// Variante 1: -- IN --
// (const funktioniert da in jedem Schleifendurchgang ein neues i definiert wird!)
for (const i in students) {
  console.log('i: ', i)
  console.log('Student: ', students[i])
}

// Variante 2: -- OF --
// Index interessiert meist nicht sondern nur die Werte!
for (const student of students) {
  console.log(student)
}
