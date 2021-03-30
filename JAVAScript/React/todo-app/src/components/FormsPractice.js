import React from 'react';
class FormPractice extends React.Component{
    constructor(){
        super();
        this.state={
            firstName:"",
            lastName:"",
            age:"",
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        const {name,value,type,checked}=event.target;
        this.setState({
            [name]:value,
        })
    }
    clickSubmit(event){
        this.handleChange(event)
    }
    render() {
        return(
            <form>
                <input type='text' value={this.state.firstName} 
                    onChange={this.handleChange}
                    placeholder="First Name"
                    name="firstName"
                />
                <br/>
                <input type='text' value={this.state.lastName} 
                    onChange={this.handleChange}
                    placeholder="Last Name"
                    name="lastName"
                />
                <br/>
                <input type='text' value={this.state.age} 
                    onChange={this.handleChange}
                    placeholder="Age"
                    name="age"
                />
                <br/>
                <button type='submit' onClick={this.clickSubmit}>Submit</button>
                <hr></hr>
                <h1>Your Name : {this.state.firstName+" "+this.state.lastName}</h1>
                <h1>Your Age : {this.state.age}</h1>
            </form>
        )
    }
}
export default  FormPractice;