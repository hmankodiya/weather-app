import React,{useState} from 'react';
import  Person from './Person.js';
 
const Hooks = props => {   
    // use state returns two things first is the current state second is the function that can change the state
    const [personState,setStateFunction]=useState({ 
        persons:[
            {name:'Max',age:28},
            {name:'Manu',age:12},
            {name:'harsh',age:18}
        ],
        otherState:'some other values'
    })
    const buttonHandler = () => {
        // console.log('HHHHO');
        // personState.persons[0]='Harsh MANKODIYA'
        setStateFunction({
            persons:[ 
                {name:'Max',age:28},
                {name:'MMHH',age:12},
                {name:'harsh',age:18}
            ],
            otherState:'trfds'
        }) 
    }

    return(
        <div>
            <button onClick={buttonHandler}>BUTTON</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
            <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
            <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
            <div>HELLO hook</div>
        </div>
    );
    console.log(personState); //  here after the change of state unlike the class components ,
    // in functional components the state is overwrittern or replaced
    
}
export default Hooks;
// state full component are called smart component
// it is good to have less state component as it is easy to maintain the project 
    