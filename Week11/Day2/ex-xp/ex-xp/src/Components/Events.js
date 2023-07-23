import React, { useState } from 'react'


const Events = () => {

    const [isToggleOn, setToggle] = useState('true')

    const toggleButton = () => {
        isToggleOn ? setToggle(false) : setToggle(true)

    }
    
    const clickMe = () => {
        alert('I was clicked')
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter"){
            alert(`Enter key was pressed, your input is ${e.target.value}`)
        }
    }

    return(
        <>
        <button onClick={clickMe}>Click</button>
        <input placeholder='press Enter' onKeyDown={(e) => handleKeyDown(e)}/>
        <div>
            <h2>Excercise 2</h2>
            <button onClick={toggleButton}>{isToggleOn ? 'On' : 'Off'}</button>
        </div>
        </>
    )
}

export default Events