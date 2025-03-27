const prompt = require("prompt-sync")();

let notas = [];
let nota1 = parseFloat(prompt("Ingresa la nota1:"))
let nota2 = parseFloat(prompt("Ingresa la nota2:"))
let nota3 = parseFloat(prompt("Ingresa la nota3:"))

notas.push(nota1, nota2, nota3)

let suma = 0

function calcularPromedio(notas){
    for(let i = 0 ; i  < notas.length; i++ ){
        suma = suma + notas[i]   
    }

    return (suma/notas.length).toFixed(2);
}
let promedio = calcularPromedio(notas)
console.log(promedio)