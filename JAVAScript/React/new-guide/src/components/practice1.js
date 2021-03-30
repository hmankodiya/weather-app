import React,{useState} from 'react';

const Validate = (props) => {

    const [credState,validateCred] = useState({
        uname:'',
        pswd:'',
    })
    const changeHandler1 = (event) => {
        console.log('Pressed');
        validateCred({
            uname:event.target.value,
            pswd:credState.pswd,
        })
        console.log('uname=',credState.uname,'Pswd=',credState.pswd);
    }
    const changeHandler2 = (event) => {
        console.log('Pressed');
        validateCred({
            pswd:event.target.value,
            uname:credState.uname,
        })
        console.log('uname=',credState.uname,'Pswd=',credState.pswd);
    }
    return(
        <div>
            <input type='text' name='uname' onChange={changeHandler1} placeholder='User Name'/>
            <br></br>
            <br></br>
            <input type='password' name='pswd' onChange={changeHandler2} placeholder='Password'/>
        </div>
    );
}

export default Validate;   