// import { heroes } from './data/heroes'
// import {heroes} from './data/heroes'

import  heroes, { owners }  from "../data/heroes"


const getHeroeById = (id) =>{

    return heroes.find( (heroes) => heroes.id === id)

}



const getheroesByOwner = (owner) => {
    return heroes.filter(heroes => heroes.owner === owner)
}



export default getHeroeById