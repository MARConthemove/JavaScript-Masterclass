'use strict'

const items = [15, 25, 30]

function summe(liste) {
  let s = 0
  for (let element of liste) {
    s += element
  }
  return s
}

let itemsSum = summe(items)
console.log(itemsSum === 70)
