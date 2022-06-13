"use strict"

function generateGreeting(name) {
    return "Hallo " + name + "!"
}
module.exports.generateGreeting = generateGreeting
console.log(module.exports)
