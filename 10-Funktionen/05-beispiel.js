"use strict"

const https = require("https")
const http = require("http")

const url = "https://api.spacexdata.com/v4/launches/latest"

https.get(url, (res) => {
    // Antwort "res" kommt in Paketen / Blöcken bei uns an - Nicht als ganzes
    // Wir wollen zb. 700mb Schritt für Schritt verarbeiten
    // Zb. in 1 MByte Schritten
    // Callback Funktion mit Parameter "chunk" wird mehrmals aufgerufen bis alle Daten überliefert wurden
    // Die Daten kommen in der richtigen Reihenfolge bei uns an, das wird durch das TCP Protokoll gewährleistet!

    let data = ""
    res.on("data", chunk => {
        // console.log("chunk:", chunk)
        data += chunk
    })

    //
    res.on("end", () => {
        const dataAsObj = JSON.parse(data)
        console.log(dataAsObj["name"])
    })
    // console.log(res.statusCode)
})


/*
INFO!!

res is a readstream of the incoming data from the response. Streams in node.js are derived from EventEmitter objects - they have a number of events that you can listen to.

The .on() method on a stream is how you register a listener for a particular event.

res.on('data', ...) is how you register a listener for the data event and the data event is the primary way that you receive data from the incoming stream. This listener will be called one or more times with chunks of arriving data.

Another important event is the end event which tells you that you've reached the end of the data - there is no more data.

*/
