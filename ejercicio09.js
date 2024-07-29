// Ejercicio 9
// Imprimir los números de 1 a N (siendo N un número que se lee) cada uno con su respectivo factorial.
const prompt = require('prompt-sync')({siging: true })// paso adicional: npm i prompt-sync

let N = parseFloat(prompt("ingrese un numero: "));
let num = N

const numero = (num) => {
    for (let i = 1; i <= num; i++) {
    //console.log(`${i} cuadrado: `, factorial(N));
    }

}

const factorial = (N) => {
    if (N === 0 || N === 1) return 1


    for (let i = N - 1; i >= 1; i--){
        let e = 1
        i >= 1 ? e++ : e
        N *= i;
        console.log(`${e} factorial: `, N);
    }
    return N;
}



numero(N);
factorial(N);
