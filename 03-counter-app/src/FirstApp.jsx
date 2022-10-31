
import React from 'react'

const person = {
    name: 'Angel',
    age: 26

}

const getName = (name) =>{

    return name

}

export const FirstApp = () => {
  return (
  <>
     <h1>{JSON.stringify(person)}</h1>
    <p>Soy un estudiante</p>
    {getName('Monika')}
  </>
   
  )
}

