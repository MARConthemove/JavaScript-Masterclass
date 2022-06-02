"use strict"

// https://github.com/r-spacex/SpaceX-API
// launches.json: https://api.spacexdata.com/v3/launches

// Datei einlesen. fs.readFileSync() ist Anti-Pattern!
const fs = require("fs")
const launches = JSON.parse(
    fs.readFileSync("spacex/launches.json", { encoding: "utf-8" })
)

console.log("Anzahl launches:", launches.length)
console.log("typeof launches:", typeof launches)

// Aufgaben:
//
// 1) Wie viele Raketen hat SpaceX im Jahr 2018 gestartet?
//    1a) Wie viele davon erfolgreich

let successLaunches2018 = 0
let launchesTotal2018 = 0

for (const launch of launches) {
    if (launch["launch_year"] === "2018") {
        launchesTotal2018 += 1
    }
}

for (const launch of launches) {
    if (launch["launch_success"] === true && launch["launch_year"] === "2018") {
        successLaunches2018 += 1
    }
}
console.log("-".repeat(40))
console.log("A1) Rocket launches in 2018: ", launchesTotal2018)
console.log("A1a) Successfull Launches in 2018: ", successLaunches2018)

//    1b) Wie viele davon nicht erfolgreich?
//
//    Hinweis: Schau' dir dazu die Eigenschaften "launch_year" und
//             "launch_success" an!
//
//    Hinweis 2: Es kann sein, dass in manchen Jahren alle Rakentenstarts
//    zu 100% erfolgreich waren. In dem Fall soll dein Code trotzdem so
//    entwickelt sein, dass überprüft wird, ob der Startvorgang erfolgreich
//    war oder nicht!

console.log("A1b) Not successfull Launches in 2018: ", launchesTotal2018 - successLaunches2018)

// 2) Wie viele kg Nutzlast wurden im Jahr 2018 *erfolgreich* ins Weltall
//    gestartet?
//
//    Du findest die Nutzlast unter "rocket", "second_stage", "payloads",
//    dann das entsprechende Payload, und von dem die Eigenschaft
//    "payload_mass_kg".
//
//    Hinweis:
//    Bitte beachte, dass eine Rakete u.U. mehrere Satelliten haben kann!

console.log("-".repeat(40))

let sumKg = 0

for (const launch of launches) {
    // Filter: nicht im Jahr 2018 oder Startvorgang Fehlgeschlagen dann springe aus der Schleife!
    if (launch["launch_year"] !== "2018" || launch["launch_success"] === false) {
        continue
    }

    const secondStage = launch["rocket"]["second_stage"]

    for (const payload of secondStage["payloads"]) {
        const kg = payload["payload_mass_kg"]
        console.log("kg:", kg)
        // console.log("typeof kg:", typeof kg)
        sumKg += kg
    }
}

// payloadInKg2018 += launch["rocket"]["second_stage"]["payloads"]
console.log("2) Payload of Launches in 2018:", sumKg + " Kilogramm")

