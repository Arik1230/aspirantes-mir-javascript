
//Crea una función maxIndex que reciba una arreglo de números y retorne el índice donde se encuentra el mayor. 
//Si el arreglo está vacío debe retornar -1.


function maxIndex(numeros) {
    let maxn = 0;
    let maxi = -1;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maxn) {
            maxn = numeros[i]
            maxi = i
            
        }
    }
    return maxi
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1