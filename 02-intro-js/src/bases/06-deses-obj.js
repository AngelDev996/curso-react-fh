//Desestructuracion:TEMA IMPORTANTE

const persona = {

    nombre: 'Angel',
    apellido: 'Valladares',
    edad: 26,
    direccion: {
        lng: 12332,
        lat: 3255
    }

}

const {nombre, apellido, edad ,direccion: {lng, lat}} = persona

console.log(nombre, apellido, edad, lng)

