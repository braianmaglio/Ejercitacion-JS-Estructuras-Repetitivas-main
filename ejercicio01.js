// Ejercicio 1
// Hacer los algoritmos que calculen el promedio de una serie de notas hasta que se ingrese una nota
// negativa, utilizar las tres estructuras repetitivas.

let sumaNotas = 0;
let contadorNotas = 0;
let nota;
let promedioNotas = 0;



do {
    console.log("Ingrese una nota (entre 0 y 10): ");
    nota = parseFloat(prompt());

    if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Nota inválida. Ingrese un número entre 0 y 10.");
    } else {
    sumaNotas += nota;
    contadorNotas++;
    console.log(nota);
        if (contadorNotas != 1){
            promedioNotas = sumaNotas / contadorNotas;
            console.log("Promedio: " + promedioNotas);
        } else {
            console.log("Primera nota ingresada: " + nota);
        }
    }
} while (nota >= 0);

