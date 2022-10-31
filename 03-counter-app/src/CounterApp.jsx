import { useState } from 'react'
import PropTypes from 'prop-types'

//rafc
export const CounterApp = () => {

    const [counter, setCounter] = useState(12)

    function handleEvent(){
        
        setCounter (counter+1)
    }


  return (
    <>
    <h1>CounterApp</h1>
    <h2> { counter } </h2>
    <button onClick={ handleEvent }>
        +1
    </button>
    </>
   
  )
}

CounterApp.propTypes = {
    contador: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    contador: 0
}