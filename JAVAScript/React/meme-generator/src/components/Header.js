import React from 'react';
import trollFace from './trollFace.png'
function Header(){
    return(
        <header>
            <img
                src={trollFace}
                alt="problem?"
            />
            <h1>Meme Generator</h1>
            <hr></hr>
        </header>
    );
}

export default Header;