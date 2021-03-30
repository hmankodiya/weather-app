import React from 'react';
import ReactDOM from 'react-dom';

function Jokes(props){
    // let question=null,answer=null;
    // if(props.question!=null){
    //     console.log("hell");
    //     question=props.question;
    //     // tag="<h3>Q</h3>"
    // }
    // answer=props.answer;
    // experimentation

    // const nums=[1,2,3,4,5];
    // const doubled=nums.map(function(num){
    //     return num*2;
    // });
    // console.log(doubled);
    
    return (
        <div className="jokeDiv">
            <h3 className="Que" style={{display:props.question?"block":"none"}}>Question:{props.question}</h3>
            <h3 className="Ans">Answer:{props.answer}</h3>
            <hr></hr>
        </div>
    );
}
export default Jokes;
