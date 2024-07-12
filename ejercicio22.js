// 22. Calcular la nota promedio de un salón de clase y la nota mayor y el código del estudiante
// que la obtuvo, validar que las notas ingresadas se encuentren en el intervalo [0,10]. El
// ingreso de notas finaliza a pedido del operador.

let mayorNota = Number.MIN_SAFE_INTEGER
let codMejorEstudiante = 0
let sumaNotas = 0
let contadorNotas = 0
let opcion = "s"

do {
    do{
    let nota = Number(prompt("ingrese una nota"))

    } while (nota < 0 || nota > 10)
    codMejorEstudiante = Number
    opcion = prompt("Desea ingresar nota? si o no")
}while (opcion[0].toUpperCase() === "s")