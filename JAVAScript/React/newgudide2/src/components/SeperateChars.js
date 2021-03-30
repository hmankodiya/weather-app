import React,{useState} from 'react';
import reqCss from './BlockChar.css'

const SeprateWords = () => {

    const [currState,setStateFun]=useState({ 
        value:'HELLO'
    })
    const inputHandler = (event) =>{
        setStateFun({
            value:event.target.value,
        })
    }
    const DeleteCell = (indx) => {
        console.log('HELLO CLICKED')
        const text=currState.value.split('')
        text.splice(indx,1)
        setStateFun({
            value:text.join(''),
        })
    }

    let CharArr=currState.value.split('').map((ch,indx) => {
        return <Block ch={ch} key={indx} clicked={() => DeleteCell(indx)} />
    })
    // <MakeBlocks val={currState.value}/>
    return (
        <div>
            <input type='text' value={currState.value}  onChange={inputHandler} /> 
            <div>{currState.value}</div>
            {CharArr}
        </div>
    )
}
const Block = (props) =>{
    return  <div className='Block' onClick={props.clicked}>{props.ch}</div>
}


// const MakeBlocks = (props) => {
//     console.log('PROPS ',props.val,'spli ',props.val.split(''));
//     let CharArr=props.val.split('').map((ch,indx) => {
//         return <Block ch={ch} indx={indx} onClick={() => DeleteCell(indx)}/>
//     })
//     return(
//        <div>{CharArr}</div>
       
//     )
// }

export default SeprateWords