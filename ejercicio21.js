// 21. Se ofrece un trabajo que pague un centavo en la primera semana y dobla su salario cada semana, es decir, $0.01 la primera semana; $0.02 la segunda semana; $0.04 la tercera semana;
// $(2^n-1)/100 la n-ésima semana. Determine el salario por cada semana y el salario pagado hasta la fecha por espacio de n semanas.
const prompt = require('prompt-sync')({siging: true })// paso adicional: npm i prompt-sync

let salario = 0.01
let salarioTotal = 0
const semanas = parseInt(prompt("ingrese la cantidad de semanas"))
for (let i = 0; i <= salario; i++) {
    semana = (2 ** (i - 1)) / 100
}

console.log(`El salario por cada semana es: $${salario}`)