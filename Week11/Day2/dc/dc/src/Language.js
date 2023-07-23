import React from 'react'
import './Language.css'

const Language = ({key, language, votes, voteFunc}) => {

    return (
        <div className='card'>
            <h3>{votes}</h3>
            <h3>{language}</h3>
            <h3 className='click' id={language} onClick={(e)=>voteFunc(e)}>Click here</h3>

        </div>
    )
}

export default Language