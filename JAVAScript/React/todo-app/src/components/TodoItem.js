import React from 'react';

function TodoItem(props){
    return (
        <div className='todo-div'>
            <input type='checkbox' 
                checked ={props.item.completed} 
                onChange={() => props.hChange(props.item.id)}
            /> 
                {/* warning*/}
                {props.item.text}
            <hr/>
        </div>
    )
}

export default TodoItem;