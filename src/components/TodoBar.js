import React from 'react'

function TodoBar({func}) {
    let todoPlaceholder = "Type Here";

    
    return (
        <div>
            <input type="text" placeholder = {todoPlaceholder} id="todoText" 
            onKeyUp={(event) => {if(event.key ==="Enter"){func()}}} />
            <button id="todoBtn" onClick={() => func()}>Add Todo</button>
        </div>
    )
}

export default TodoBar
