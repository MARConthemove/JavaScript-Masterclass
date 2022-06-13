const { generateGreeting } = require('./02-Part02')

test('It should generate a message', () => {
    const greeting = generateGreeting("Max Müller")
    expect(greeting.indexOf(greeting) !== -1).toBe(true)
})
