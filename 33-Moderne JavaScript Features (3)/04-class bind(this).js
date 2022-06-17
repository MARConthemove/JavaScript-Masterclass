'use strict'

class Student {
  constructor(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname

    // this.getName = der Funktion von unten
    // this.getName.bind(this) = das "this" object von oben wird nun an diese Funktion gebunden
    // der komplete ausdruck wird nun this.getName zugewiesen und es kann von überall per object.getName zugegriffen werden
    this.getName = this.getName.bind(this)
  }

  getName() {
    console.log(`${this.lastname}, ${this.firstname}`)
  }
}

const max = new Student('Max', 'Mustermann')

console.log('max: ', max)
console.log('typeof max: ', typeof max)
console.log('------------------------')



setTimeout(max.getName, 1000)
