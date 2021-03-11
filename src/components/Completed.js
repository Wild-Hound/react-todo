import React from 'react'
import './completed.css'

function Completed({title}) {
    return (
        <div className="compCon">
            <h3 className="compItem">Completed: {title}</h3>
        </div>
    )
}

export default Completed
