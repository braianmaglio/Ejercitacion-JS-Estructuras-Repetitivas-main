// Ejercicio 10
// Imprimir los 100 primeros números de Fibonacci. Recuerde que un número de Fibonacci se calcula
// como la suma de los dos anteriores así: 0, 1, 1, 2, 3, 5, 8, 13...

let fibonacci = [0, 1];


while (fibonacci.length < 100) {
    const suma = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(suma);
}

let listado = fibonacci.toString();

console.log(listado);