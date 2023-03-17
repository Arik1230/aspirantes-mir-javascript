// escribe la función max acá

function max(numeros) {
    
    if (numeros.length === 0)
        return undefined

    let maxn = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maxn) {
            maxn = numeros[i]
        }
    }
    return maxn
}



console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined