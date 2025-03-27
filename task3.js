const prompt = require("prompt-sync") ();
function main() {
    const inventario = [
        { nombre: "Camisa" , precio: 20},
        { nombre: "Zapatos" , precio: 50}
    ];
    
    let respuesta = prompt("Respuesta: ")
    
    console.log(Buscar_Producto(inventario, respuesta))
    
function Buscar_Producto(inventario, respuesta) {
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre === respuesta) {
            return true;
        }
    }
    return null;
}
}
main ()