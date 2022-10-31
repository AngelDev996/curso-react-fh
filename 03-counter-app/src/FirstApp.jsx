
import React from 'react'
import PropTypes from 'prop-types'
// const person = {
//     name: 'Angel',
//     age: 26

// }

// const getName = (name) =>{

//     return name

// }

export const FirstApp = ({title, subtitle}) => {


    if(!title){
        throw new Error('El title no existe')
    }


  return (
  <>

    <h1>{title} { subtitle}</h1>
  </>
   
  )
}



FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}