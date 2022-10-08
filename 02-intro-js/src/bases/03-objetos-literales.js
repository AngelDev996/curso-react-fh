

const persona = {

    nombre : 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion : {
        ciudad: 'New York',
        lng: 12.2332,
        lat: 32.90832
    }

}

console.log(persona.direccion.lat)

const persona2 = persona //NO hacer esto para clonar objetos
const persona3 = {...persona} //Esto si se puede hacer para clonar objetos (Operador spread)