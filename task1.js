/*jercicio 1: Calculadora de Propinas- Una app para calcular propinas en restaurantes.
 Crea una función calcularPropina(total, porcentaje) que reciba el total de la cuenta y el porcentaje de 
propina, y retorne el monto final a pagar (total + propina). */

const prompt = require("prompt-sync")();
let total = parseFloat(prompt("Ingrese el monto de la cuenta: "));
let porcentaje = parseFloat(prompt("Ingrese el descuento / propina: "));
function calcularPropina(total, porcentaje) {
    let resultado = total + (total * porcentaje) / 100;
    return resultado;
}
console.log("Precio total:", calcularPropina(total, porcentaje));