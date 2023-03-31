/* En un archivo llamado object3.js Crear una variable llamada receta e inicialízalo con un objeto literal vacío.*/

const receta = {

}
receta.nombre = "Sandwich";
receta.ingredientes = [];
receta.ingredientes.push({ nombre: "pan", cantidad: 2 });
receta.ingredientes.push({ nombre: "queso", cantidad: 1 });
console.log(JSON.stringify(receta.ingredientes))
const ingredientes1 = receta.ingredientes[0].nombre;
console.log(ingredientes1);

const total = receta.ingredientes[0].cantidad + receta.ingredientes[1].cantidad;
console.log(total)





