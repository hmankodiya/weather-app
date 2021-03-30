import React from 'react';
import jokesData from './jokesData';
import Jokes from './Jokes';



function Insheader(){
    return (
        <header className="appHead">
            Header
        </header>
    );
}
function InsBody(){
    const data=jokesData.map(joke => {
        return(
            <Jokes className="jokeClass" question={joke.question} answer={joke.answer}/>
        );
    });
    return (
        <div className="bodyClass">
            BODY
            {data}
        </div>
    );
}
export {Insheader,InsBody}
// export default InsBody; // only single