import React from 'react';
import ReactDOM from 'react-dom';
import logo from 'C:\\Users\\harsh\\Desktop\\sql and html\\JAVAScript\\React\\new-app\\src\\logo.svg';

function ConctactCard(props){ // inserting para {props is object} 
console.log(props);    
return(
        // <div className="contact-card">
        //     <img src={logo}/>
        //     <h3>Harsh</h3>
        //     <p>NO: </p>
        //     <p>Email: </p>
        // </div>
        <div className="contact-card">
            <img src={logo}/>
            <h3>Name:{props.contact.name}</h3>
            <p>NO:{props.contact.phone}</p>
            <p>Email:{props.contact.email} </p>
        </div>
    );
}

export default ConctactCard;