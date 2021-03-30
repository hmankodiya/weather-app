import React, { Component } from 'react';

// <p>Hello {this.props.userName}</p>
class Header extends React.Component{
    render(){
        return(
            <header>
                <h1>Hello</h1>
                <h1>Hello,{this.props.username}</h1>
                <h1>Hello,{this.props.username}</h1>
                <h1>Hello {this.props.info.username}  {this.props.info.date} </h1>
            </header>
        );
    }
}
export default Header;