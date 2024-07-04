// Ejercicio 4
// Imprimir un listado con los números impares desde 1 hasta 999 y seguidamente otro listado con los
// números pares desde 2 hasta 1000

let num

function numerospares() {
    let num = 2 ;
    do {
        console.log(num)
        num = num + 2
    } while (num <= 10)
}

function numerosimpares(){
    let num = 1
    do {
        console.log(num)
        num = num + 2
    }while (num <= 9)
}

console.log("Listado de números impares:")
numerosimpares();

console.log("Listado de números pares:")
numerospares();

console.log("Listado de números impares:")
for (num = 1; num <= 9; num = num + 2) {
    console.log(num)
}

console.log("Listado de números pares:") 
for (num = 2; num <= 10; num = num + 2) {
    console.log(num)
}