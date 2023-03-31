/* En un archivo llamado object2.js Crea un objeto literal llamado "persona" con las siguientes propiedades: nombre, edad, ciudad y profesión.
Imprime en la consola el objeto "persona" completo.
*/

const persona ={
    nombre: "Stephanie",
    edad: 28,
    ciudad: "Barranquilla",
    profesion: "Medico",

}
console.log(persona)

/*Crea una función llamada "presentacion" que tome el objeto "persona" como argumento y 
devuelva una cadena de texto que incluya el nombre, la edad y la ciudad de la persona.
Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".
Imprime en la consola el valor de la variable "mensaje".
Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo con algunos pasatiempos.
Imprime en la consola la propiedad "hobbies" del objeto "persona".
Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies. */

function presentacion (persona){
    return `${persona.nombre},${persona.edad},${persona.ciudad}`

}
mensaje = presentacion(persona)
console.log(mensaje)

persona.hobbies= ["Leer","Jugar play", "caminar"]
console.log(persona.hobbies)

const pasatiempos = [persona.hobbies]

for(index=0; index< pasatiempos.length; index++){
    let pasatiempos1= pasatiempos[index]
    return pasatiempos1 
}



