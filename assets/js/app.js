// FOOTER SECTION DATE
const year = document.getElementById("date");
year.innerHTML = new Date().getFullYear();


// TEXT TO MORSE TRANSLATOR

// Definimos un objeto que contiene la tabla de caracteres morse
const morseTable = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    " ": "/"
};

// Función para traducir de Español a Morse
function espanolAMorse() {
    const texto = document.getElementById("texto").value.toUpperCase();
    let traduccion = "";

    for (let i = 0; i < texto.length; i++) {
        const letra = texto.charAt(i);

        if (morseTable[letra]) {
            traduccion += morseTable[letra] + " ";
        } else {
            traduccion += letra + " ";
        }
    }

    document.getElementById("texto-traducido").value = traduccion.trim();
}


// Función para traducir de Morse a Español
function morseAEspanol() {
    const texto = document.getElementById("texto").value;
    let traduccion = "";

    const palabras = texto.split("/");
    for (let i = 0; i < palabras.length; i++) {
        const letras = palabras[i].split(" ");

        for (let j = 0; j < letras.length; j++) {
            const letra = Object.keys(morseTable).find(key => morseTable[key] === letras[j]);
            if (letra) {
                traduccion += letra;
            } else {
                traduccion += letras[j];
            }
        }

        traduccion += " ";
    }

    document.getElementById("texto-traducido").value = traduccion.trim();
}
