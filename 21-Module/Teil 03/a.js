"use strict"

// Verschiedene Schreibweisen möglich! module.exports wird standardmäßig als leeres object angelegt {}, dort kann man dann auf beliebige weise seine key value pairs einbinden zum exportieren.

module.exports.f = function() {
  console.log("Ich bin die a.js")
  const a = 5
  console.log(a + 5)
}

/*
const f = () => {
  console.log("Ich bin die a.js")
  const a = 5
  console.log(a + 5)
}

module.exports = {
  f: f
}
*/
