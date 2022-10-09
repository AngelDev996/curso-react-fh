const personajes = ['Goku', 'Vegeta','Trunks']

const [,p2] = personajes

console.log(p2)

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo()

console.log(letras)

const useState = (valor) => {
    return [valor, ()=>{console.log('Hola mundo')}]
} 

const [nombre, setNombre] = useState('angel')
console.log(nombre)