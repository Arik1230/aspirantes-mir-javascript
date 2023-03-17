// Crear una función join que reciba un arreglo y retorne un string con todos los elementos separados por espacio sin usar el método join de los arreglos.


function join(arre1) {
    let resultado = "";

    for (let i = 0; i < arre1.length; i++) {
        resultado = resultado+ " " +arre1[i];
    }
   
   return resultado

    }
    
console.log(join(["HOLA", "COMO", "ESTAS"]))





