import React from 'react'
import './todoLists.css'

function TodoLists({val, func}) {
    return (
        <div className="todoItem">
            <h1 className="itemDisc">{val}</h1>
            <button className="closeBtn" onClick={() => func(val)}>Close</button>
        </div>
    )
}

export default TodoLists
