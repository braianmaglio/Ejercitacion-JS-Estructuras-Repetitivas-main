// Ejercicio 7
// Realizar la operación de potenciación (a^b), de dos valores enteros positivos, con multiplicaciones.

const prompt = require('prompt-sync')({siging: true })// paso adicional: npm i prompt-sync

let a = parseFloat(prompt("ingrese el primer numero: "));
let b = parseFloat(prompt("ingrese la potencia: "));

// guardar el primer valor de a
let tempA = a

// multiplicar a por si mismo b veces
const potencia = (a, b) => {
    while (b > 1) {
        tempA = a * tempA
        b--
    }
    console.log(`el resultado es `, tempA)
}

potencia(a, b)