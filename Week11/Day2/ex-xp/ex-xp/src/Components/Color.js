import React, { useEffect, useState } from 'react'

const Color = () =>{
    const[favoriteColor, setFavoriteColor] = useState('red')

    useEffect(() => {
        alert('Use effect reached')
        setFavoriteColor('yellow')
    })

    const changeColor = () => {
        setFavoriteColor('blue')
    }


    return(
        <header>
            <h1>
                <span>My Favorite Color is </span>
                <span style={{fontStyle: 'italic'}}>{favoriteColor} </span>
            </h1>
            <button onClick={changeColor}>Change color</button>
        </header>
    )

}


export default Color