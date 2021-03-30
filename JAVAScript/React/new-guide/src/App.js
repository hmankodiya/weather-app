import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import  Person from './components/Person.js';
import  Hooks from './components/Hooks.js';
import  Validate from './components/practice1.js';

function App() { 

  return (
    <div>
      {
      //   <Person name='Max' age='19' />
      // <Person name='Harsh' age='19'> HELLP </Person> {/* */}
      // <Person name='Tony' age='49' />
      // <br/>
      // <br/>
      // <Hooks/>
      }
      <Validate/>
    </div>
  );
}
// class App extends React.Component {
  
//   // state {/*state is managed inside this is for those who extend component* */}
//   state = {
//     persons:[
//       {name:'Max',age:28},
//       {name:'Manu',age:12},
//       {name:'harsh',age:18}
//     ],
//   }

//   buttonHandler = (newName) => {
//     // console.log('HHHHO');
//     this.state.persons[0]='Harsh MANKODIYA' // dont directly change
//     // object as argument and will merge with existing state
//     // i.e will change what is changed and keep unchanged things untouched
//     this.setState({
//       persons:[ 
//         {name:'Max',age:28},
//         {name:newName,age:12},
//         {name:'harsh',age:18}
//       ]
//     }) 
//   }
//   newInputHandler= (event) =>{
//     this.setState(
//       {
//         persons:[ 
//           {name:'Steve',age:28},
//           {name:event.target.value,age:12}, // take value from the targe i.e the input tag
//           {name:'Thor',age:18}
//         ]
//       }
//     )
//   }
//   render(){
//     return(
//       // <div>dsadsa</div>
//       <div>
//         <button onClick={this.buttonHandler.bind(this,'YOGUYS')}>BUTTON</button> {/**first way to handle dynamic data */}
//         {/*<button onClick={this.buttonHandler.bind(this)}>BUTTON</button>*/} {/**first way to handle dynamic data */}
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
//           click={this.buttonHandler.bind(this,'tonyStark')} 
//           changedFun={this.newInputHandler}
//           />
//           click the above line {/*reference of method as props*/}
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
//       </div>
//     );
//   }
// }

export default App;
