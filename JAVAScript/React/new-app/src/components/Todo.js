import React from 'react';
import ReactDOM from 'react-dom';

function Todo(){
    const date=new Date();
    const first_name="harsh";
    const styles={
        color:"green",
        backgroundColor:"yellow",
        // fontSize:100,
        width:100,/*default unit is px*/
        height:"4em",

    }
    const stylesChange={
        fontSize:30,
    }
    if(date.getHours()<12){
        stylesChange.color="green";
    }
    else if(date.getHours()>=12 && date.getHours()<17){
        stylesChange.color="orange";
    }
    else{
        stylesChange.color="grey";
    }
    return(
        <div /* style={{width:"fit-content"}} */>
            <ul>
                <li className="Task1"> <input type="checkbox"/>Task1 </li>
                <li> <input type="checkbox"/>Task2 </li>
                <li> <input type="checkbox"/>Task3 </li>
            </ul>
            <input type="submit" value="save"/>
            <h1>Hello {" \" "+first_name+" \" "}</h1> {/*here is java script first_name inside the jsx */}
            <h1>Hello {date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()}</h1>
            <h1 style={{color:"red",/*can also write here*/},{backgroundColor:"blue"}}>Hello the time is {date.getHours()+"/"+date.getMinutes()}</h1>
            <h1 style={styles}> syntax OPTIMIZED</h1>
            <h1 style={stylesChange}>CHANGING</h1>

        </div>


    );
}

export default Todo;