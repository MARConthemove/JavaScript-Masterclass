'use strict'

class Student {
  constructor(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
  }

  getName() {
    return `${this.firstname} ${this.lastname}`
  }
}

class LanguageStudent extends Student {
  constructor(firstname, lastname, language) {
    // super() wird verwendet bei class Vererbung!
    // geht in die Student class
    super(firstname, lastname)
    this.language = language
  }

  getLanguage() {
    console.log(`${this.language}`)
  }
}

const max = new LanguageStudent('Max', 'Mustermann', 'Deutsch')
debugger
console.log(max.getName())
