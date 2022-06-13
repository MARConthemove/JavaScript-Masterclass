"use strict"

const { resolveAsync, resolvePromise } = require("./05-Part05")


// Für async functions mit done -> done() arbeiten
test("resolveAsync should call callback", (done) => {
    resolveAsync((message) => {
        expect(message).toBe("Hallo Welt!")

        done()
    })
})

test("resolvePromise should resolve", () => {
    return resolvePromise().then((message) => {
        expect(message).toBe("Hallo Welt!")
    })
})

test("(Vorschau): resolvePromise should resolve", async () => {
    const message = await resolvePromise()
    expect(message).toBe("Hallo Welt!")
})
