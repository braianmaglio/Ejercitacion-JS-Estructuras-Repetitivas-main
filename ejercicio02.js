// Ejercicio 2
// Realizar la multiplicación de dos números enteros A y B mediante sumas sucesivas, hacer tres
// algoritmos con cada estructura repetitiva.
const prompt = require('prompt-sync')({siging: true })// paso adicional: npm i prompt-sync

let a = parseFloat(prompt("ingrese el primer numero: "));
let b = parseFloat(prompt("ingrese el segundo numero: "));
let respuesta1 = 0


// Algoritmo 1:
const primer = (a, b) => {
    if (b === 0) {
        a = respuesta1
        return console.log(a);

    } else {
        respuesta1 += a
        b--
        return primer(a, b)
    }
}

// Algoritmo 2:
const segundo = (a, b) => {
    let resultado2 = 0
    for (let i = 0; i < b; i++) {
        resultado2 += a
    }
    console.log(resultado2)
}

// Algoritmo 3:
const tercero = (a, b) => {
    let resultado3 = 0
    while (b > 0) {
        resultado3 += a
        b--
    }
    console.log(resultado3)
}



primer(a, b)
segundo(a, b)
tercero(a, b)