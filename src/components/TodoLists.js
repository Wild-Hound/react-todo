import React from 'react'
import './todoLists.css'

function TodoLists({val, func, func2}) {
    return (
        <div className="todoItem">
            <h3 className="itemDisc">{val}</h3>
            <button className="closeBtn" onClick={() => func(val)}>Close</button>
            <button className="completeBtn" onClick={() => func2(val)}>Completed</button>
        </div>
    )
}

export default TodoLists
