
//Crea una función sum que reciba un arreglo de números y retorne la suma de todos los elementos:

function sum(numeros) {

    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma
}
console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0



