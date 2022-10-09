function saludar(name){

    return `Hola ${name}`
}

console.log(saludar('Angel')) //manera no recomendable

const saludar2 = function(){

    return 'Hola'
}

console.log(saludar2()) //forma recomendable

const saludar3 = (nombre) => {

    return nombre
}

const saludar4 = (nombre) => `holi ${nombre}` //funtion de flecha

console.log(saludar4('Yahir'))

//Tarea
//1. Transformar a funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas

function getUserActivo(nombre){
    return{
        uid: 'ABC123',
        username: nombre,
    }
}

console.log(getUserActivo('Lohe'))

const arrowGetUserActivo = (nombre) =>({
    uid: 'ABC123',
    username: nombre,
})

console.log(arrowGetUserActivo('Walter'))