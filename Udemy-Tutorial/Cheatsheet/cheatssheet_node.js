// Main-Datei heißt "app.js"

// um andere js-Dateien zu nutzen
require("./NameDerJSDatei");

// um eine Klasse aus einer anderen js-Datei zu exportieren
// muss in der anderen js-Datei ganz ans Ende
module.exports = NameDerKlasse;

// Module die benötigt werden von npm
// Datei "package.json"
// Beispiel "express":
/*{
    "name": "Nodeprojekt",
    "dependencies": {
        "express": "4.14.0"
    }
}*/