import React from 'react';
import pscss from './person.css'; //  necessary to import css for it to be implemented 
const Person = (props) => {
    return (
        <div className='person'>
        <input type="text" onChange={props.changedFun} value={props.name}/>
           <p onClick={props.click}> {Math.random()*30}

                i am {props.name} and age is {props.age}
                {props.children /*This is the one which is there in between the tags */}
            </p>
        </div>
    )
}

export default Persons;