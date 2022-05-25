'use strict'

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    continue // überspringt den aktuellen Schleifendurchlauf
  }
  if (i === 9) {
    break // bricht komplett die Schleife ab
  }

  console.log('i: ', i)
}

