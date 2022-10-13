

try {
    const getImagen = async () =>{
        const api_key = 'W6PHPWX5FSxBYKLZqFP79INwXkDGsHN9'
        const resp =await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)
        const {data} = await resp.json()
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    }
    getImagen()
    
} catch (error) {
    console.warn(error)
    
}








// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)

// peticion
//     .then(resp=> resp.json())
//     .then(({data})=>{
//         const {url} = data.images.original

//         const img = document.createElement('img')
//         img.src = url
//         document.body.append(img)

//     })
//     .catch(console.warn)