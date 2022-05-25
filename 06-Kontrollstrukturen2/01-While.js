'use strict'

let counter = 0
while (counter < 5) {
  // counter = counter + 1
  counter++
  console.log('Counter: ' + counter)
}

// Aufpassen! Endlosschleife
/*
while (true) {
  console.log("Hallo Welt!")
}
*/
/*
let students = ["Max"]
while (students.length < 4) {
  console.log("Hallo Welt!")
}
*/

let counter2 = 0
do {
  counter2++
  console.log(counter2)
} while (counter2 < 5)
