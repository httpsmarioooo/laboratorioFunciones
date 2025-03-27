const prompt = require("prompt-sync")();

const usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 17 },
    { nombre: "Luis", edad: 30 },
    { nombre: "María", edad: 15 }
];

function filtrarUsuarios(usuarios, edadMinima) {
    return usuarios.filter(usuario => usuario.edad >= edadMinima);
}

// Pedir al usuario la edad mínima
const edadMinima = parseInt(prompt("Ingrese la edad mínima: "), 10);

const usuariosFiltrados = filtrarUsuarios(usuarios, edadMinima);

console.log("Usuarios que cumplen con la edad mínima:", usuariosFiltrados);