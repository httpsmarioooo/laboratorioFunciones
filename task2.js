/*Ejercicio 2: Validar Contraseña- Formulario de registro.
 Crea una función validarContraseña(contraseña) que retorne true si
 Tiene al menos 8 caracteres.- Incluye un número.- Incluye una mayúscula.*/

const prompt = require("prompt-sync")();

function validarContraseña(contraseña) {
    if (contraseña.length < 8) {
        console.log(" La contraseña es demasiado corta. Debe tener al menos 8 caracteres.");
        return false;
    }
    if (!/[A-Z]/.test(contraseña)) {
        console.log(" La contraseña debe contener al menos una letra mayúscula.");
        return false;
    }
    if (!/[0-9]/.test(contraseña)) {
        console.log(" La contraseña debe contener al menos un número.");
        return false;
    }

    console.log(" Contraseña válida.");
    return true;
}

// Bucle para pedir la contraseña hasta que sea válida
let contraseña;
do {
    contraseña = prompt("Ingrese su contraseña (mínimo 8 caracteres, un número y una mayúscula): ");
} while (!validarContraseña(contraseña));

