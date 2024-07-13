// Ejercicio 6
// Realizar la división entera a/b de dos valores enteros positivos mediante restas.
let a
let b

function divisionEntera(a, b) {
    if (b === 0) {
        throw new Error("Divisor no puede ser cero");
    }
    
    let resultado = 0;

    while (a >= b) {
        a -= b;
        resultado++;
    }

    return resultado;
}

console.log(divisionEntera(15, 3));