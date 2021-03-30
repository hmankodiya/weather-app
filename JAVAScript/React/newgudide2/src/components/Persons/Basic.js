import React, { Component} from 'react';
import Person from './Persons.js';

class Basic extends Component{
    
    shouldComponentUpdate(nextProps, nextState){
        console.log('[App.js] shouldComponentUpdate',nextProps,nextState);
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[App.js] getSnapShotBeforeUpdate ',prevProps,'  ',prevState);
        // return null;
        return {mssg:'HELLO'};
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[App.js] componentDidUpdate');
        console.log(snapshot);
    }

    

    constructor(props){
        super(props);
        console.log('[APP.js] creation constructor');
        // state={
        //     persons:[
        //         {name:'Harsh',age:19},
        //         {name:'Tony',age:49},
        //         {name:'Steve',age:100},
        //     ]
        // }
    }
    state={
        persons:[
            {name:'Harsh',age:19},
            {name:'Tony',age:49},
            {name:'Steve',age:100},
        ]
    }



    static getDerivedStateFromProps(props,state){
        console.log('[App.js] creation getDerivedStateFromProps ',props );
        return state;
    }
    componentDidMount() {
        console.log('[App.js] creation componentDidMount ');
    }

    inputHandler = (indx,event) =>{ 

        let updated=this.state.persons
        updated[indx].name=event.target.value
        
        this.setState(
            {
                persons:updated,
            }
        )
    }
    buttonHandler = () =>{
        let updated=this.state.persons
        updated.push({name:'',age:18})
        this.setState({
            // persons:[]
            persons:updated
        })
    }
    render() {
        console.log('[App.js] creation render ');
        let personList = this.state.persons.map((val,indx) => {
            return (
                <div className='person' key={indx} >
                    <input  type='text' value={val.name} onChange={this.inputHandler.bind(this,indx)}/>
                    <Person name={val.name} age={val.age} />
                </div>
            )
        })
        return (
            <div>
                <button className='add' onClick={this.buttonHandler}>ADD</button>
                {personList}
            </div>
        );
    }
}
export default Basic;