import React, { useState } from 'react'

const Phone = () => {
    const phoneData = {
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020
    }

    const [phone, setPhone] = useState(phoneData)

    const changeColor = () => {
        const updatedPhoneData = { ...phone, color: 'blue' };
        setPhone(updatedPhoneData);
    }

    return(
        <>
            <h1>My phone is {phone.brand}</h1>
            <h3>It is a {phone.color} {phone.model} from {phone.year} </h3>
            <button onClick={changeColor}>Change color</button>
        </>
    )


}


export default Phone