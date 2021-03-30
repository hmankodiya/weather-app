import React from 'react';
import './style.css';

const Person = (props) =>{
    console.log('[Persons.js] creation rendering...');
    return ( 
        <div>
            <p>Name : {props.name} Age : {props.age} </p>
        </div>
    );
}  

export default Person;