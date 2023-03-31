
const pedro={
    nombre: "Pedro perez",
    edad: 30,
    activo: true,
    hobbies:["programar","squash","piano"]
}
console.log(pedro.edad)

pedro.estatura= 1.8

console.log(pedro.estatura)

delete pedro.activo;

console.log(pedro.activo)

const pedr= Object.keys(pedro)

for(let index =0;  index<pedr.length; index++){
    let imp= pedr[index]
    console.log( `${imp}`,":",pedro[imp],)

}