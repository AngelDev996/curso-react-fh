
const arreglo = new Array();
const arreglo2 = [1,2,3,4]

console.log(arreglo2) //push no se recomienda

const arreglo3 = [...arreglo2]
arreglo3.push(6) //no se recomienda porque modifica el arreglo de referencia
console.log(arreglo2, arreglo3)//forma recomendada (Operador spread)

const arreglo4 = arreglo2.map(function(number){
    return number*2
})
console.log(arreglo4)