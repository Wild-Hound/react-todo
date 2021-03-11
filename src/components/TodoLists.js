import React from 'react'
import './todoLists.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faCheck } from '@fortawesome/free-solid-svg-icons'

function TodoLists({val, func, func2}) {
    return (
        <div className="todoItem">
            <h3 className="itemDisc">{val}</h3>
            <div className="btncon">
                <button className="closeBtn" onClick={() => func(val)}><FontAwesomeIcon icon={faTimes} /></button>
                <button className="completeBtn" onClick={() => func2(val)}><FontAwesomeIcon icon={faCheck} /></button>
            </div>
        </div>
    )
}

export default TodoLists
