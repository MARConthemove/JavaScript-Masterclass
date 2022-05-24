"use strict"

// Die Zeile hier drüber *muss* immer die 1. Zeile in einer
// JavaScript-Datei sein.
//
// Hiermit wird der "strict mode" aktiviert, d.h. es werden
// JavaScript-Features abgeschaltet, die zu diversen Problemen
// führen.

// Es ist jetzt sichergestellt, dass wir alle Variablen mit einem
// "let" erstellen. Ist der "strict mode" deaktiviert, könnten wir
// das "let" auch weglassen - das würde aber zu Problemen führen,
// da diese Variable dann ganz anders erstellt wird als mit einem
// "let".
// Daher sollte der "strict mode" immer aktiviert sein! Das erspart
// dir viel Debugging-Zeit!

let greeting = "Hallo Welt"

// Die Variable "greeting" wird ausgegeben
console.log(greeting);
