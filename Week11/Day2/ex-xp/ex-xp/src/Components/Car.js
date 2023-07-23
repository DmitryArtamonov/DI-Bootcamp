import React, { useState } from 'react'
import Garage from './Garage'

const Car = function ({carinfo}) {
    const [color, setColor] = useState('red')
    return(
        <>
        <h1>This car is {color} {carinfo.name}</h1>
        <Garage size = "small"/>
        </>
    )
}

export default Car