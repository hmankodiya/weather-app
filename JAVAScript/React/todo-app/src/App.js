import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import todoData from './components/todoData';
import React from 'react';
import Header from './components/classComponent';
import {EventHandling,ChangeStateNo,ParentC,ChildC,DateDisplay} from './components/eventHandling';
import Conditional from './components/Conditional';
import FormPractice from './components/FormsPractice';



// function App() {
//   const todos=todoData.map(todo => {
//     return (
//       <TodoItem key={todo.id} item={todo} />
//       );
//     });
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
    
//     <div className="todo-list">
//       {/*<TodoItem/>
//       <TodoItem/>
//       <TodoItem/>*/}
//       {todos}
//     </div>
//   );
// }
// class App extends React.Component{
//   myFirstMethod(){
//     return "harsh";  
//   }
//   render(){
//     const style=this.myFirstMethod();
//     const date=new Date();
//     return (
//       // <div>hello {/*this.props.whatever*/}{style}</div>
//       // <Header username="harsh" />
//       <Header info={{username:'harsh',date:"monday"}}/>
//     );
//   }
// }
//--------------------------------------------------------------------------------------------------
// state -> for class based component
// WE NEED A CONSTRUCTOR
// 
// class App extends React.Component{
//   constructor() {
//     super();// to get Component 
//     this.state = {
//       // state is kinda like global 
//       answer:"Yes", // initial value to state 
//       // changing state can change things on the app 
//       // every child component having the used the state gets affected
//     }
//   }
//   render(){
//     return(
//       <div>State Prop = {this.state.answer}</div>
//       // passing to child component
//       // <child compo ans={this.state.answer}/>
//       );
//     }
//   }
//--------------------------------------------------------------------------------------------------

// class App extends React.Component{
//   constructor() {
//     super();
//     this.state={
//       name:'harsh',
//       answer:"Yes",
//       flag:true,
//     }
//   }
//   render(){
//     return(
//       <div>
//         Name = {this.state.name}
//         <br/> Answer = {this.state.flag?"IN":"OUT"}

//       </div>

//       );
//     }
//   }
//--------------------------------------------------------------------------------------------------

// const todos=todoData.map(todo => {
//     return (
//       <TodoItem key={todo.id} item={todo} />
//     );
// });
//--------------------------------------------------------------------------------------------------
// class App extends React.Component{
//   constructor() {
//     super();
//     this.state={
//       tododata:todoData,
//     }
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(id){
//     this.setState(
//       prevStat => {
//        const updatedTodos=prevStat.tododata.map(todo =>{
//         // if(todo.id===id){
//           todo.completed=((todo.id===id)?(!todo.completed):(todo.completed));
//         // }
//         return todo;
//        }); 
//        return ({
//          tododata:updatedTodos,
//        });
//       }
//     );
//   }
//   render(){
    
//     const todos=this.state.tododata.map(todo =>
//       // {
//       // return (
//         <TodoItem key={todo.id} item={todo}
//          hChange={this.handleChange}/>
//       // )
//     // }
//     );
    
//     // both can be done but preferibly first one
//     // as it uses states
//     return(
//       <div className="todo-list">
//         {todos}
//       </div>
//     );
//   }

// }
//--------------------------------------------------------------------------------------------------
// function App(){
//   // event handling
//   return (
//     <div>
//       harsh
//       <EventHandling/>
//     </div>

//   );
// }
// function App(){
//   return(
//     // <ChangeStateNo/>
//     // <ChildC/>
//     <div>
//       <DateDisplay/>
//     </div>
//   );
// }
//--------------------------------------------------------------------------------------------------
// class App extends React.Component{
//   constructor() {
//     super();
//     this.state={}
//   }
//   // deprecated
//   // componentDidMount(){ 
//   //   // life cycle method 
//   //   // runs only once
//   //   // things like api call , getting data from external source
//   // }
//   // componentWillReceiveProps(nextProps){
//   //   // recieve props from parent
//   //   // runs every single time when parents wants to give child the props  
//   // }
//   // shouldComponentUpdate(nextProps,nextState){  
//   // }
//   // componentWillUnmount(){
//   // }

//   render(){
//     return(
//       <div>
//         Code Goes Here
//       </div>    
//     );
//   }
// }
//--------------------------------------------------------------------------------------------------
// class App extends React.Component{
//   constructor() {
//     super();
//     this.state={
//       isLoading:true,
//       mssgs:['12','ewqew']
//     }
//   }
//   componentDidMount() {
//     setTimeout(()=>{
//       this.setState({
//         isLoading:false
//       })
//     },1500);
//   }
//   render(){
//     return(
//       <div>
//         Code Goes Here
//         {/*<Conditional isLoading={this.state.isLoading} />*/}
//         {this.state.isLoading?<h1>Loading.....</h1>:<Conditional/>}
//         {
//           this.state.mssgs.length>0&& <h2>llloll</h2>
//         }
//       </div>    
//     );
//   }
// }
//-------------------------------Practice Conditional Rendering-----------------------------------
// class App extends React.Component{
//   constructor() {
//     super();
//     this.state={
//       SessionStat:true,
//       text:"logout",      
//     }
//     this.changeStat=this.changeStat.bind(this);
//   }
//   changeStat(){
//     this.setState((prevStat)=>{
//       if(prevStat.SessionStat){
//         return({
//           SessionStat:false,
//           text:'login',
//         });
//       }
//       return({
//         SessionStat:true,
//         text:'logout',
//       });      
//     })
//   }
//   render(){
//     return(
//       <div>
//         Code Goes Here
//         <button onClick={this.changeStat}>{this.state.text}</button>
//         {this.state.SessionStat?<h1>logged IN</h1>:<h1>Logged Out</h1>}
//       </div>    
//     );
//   }
// }
//--------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------
// swapi.co
// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             loading:false,
//             character:{}
//         }
//     }
//     componentDidMount(){
//         // console.log("hi kem nu che...");
//         this.setState({loading:true,})
//         // else{
//         fetch("https://swapi.dev/api/people/1")
//         .then(response => response.json())
//         .then(data=>{
//             this.setState({
//                 character:data,
//                 loading:false,
//             })
//         })
//         // }
//     }
//     render(){
//         const text=this.state.loading?"loading...":"loaded..\n "+this.state.character.name;
//         // if(this.state.loading) text='Loading.....';
//         // else text='Loaded..'
//         return(
//             <div>
//                 {/*this.state.character.name*/}
//                 {text}
//             </div>
//         );
//     }
// }
//-----------------------------------------------------------------------------------
// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             firstName:"",
//             lastName:"",
//             isFriendly:true,
//             gender:'',
//             favColor:'',
//         }
//         this.handleChange=this.handleChange.bind(this);
//     }
    
//     handleChange(event){
//         const {name,value,type,checked}=event.target;
//         type=='checkbox'?
//         this.setState({[name]:checked})
//         :
//         this.setState({
//             // firstName:event.target.value,
//             // lastName: event.target.value,
//             // [event.target.name]: event.target.value  // name is a string hence we need to type it into the sq bracket
//             [name]:value
//         });
//     }
//     render(){
//         return(
//             <form>
//                 <input type="text" value={this.state.firstName} 
//                     name="firstName" placeholder="First Name" onChange={this.handleChange}/>
//                 <br/>
//                 <input type="text"  value={this.state.lastName} 
//                     name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
//                 <br/>
//                 <textarea value={"jjosh h"}/>
//                 <br/>
//                 <label>
//                     <input 
//                         name='isFriendly'
//                         type='checkbox' checked={this.state.isFriendly}
//                         onChange={this.handleChange}
//                     />is Friendly?
//                 </label>
//                 <br/>
//                 <label>
//                     <input 
//                         name='gender'
//                         type='radio' 
//                         value='male'
//                         checked={this.state.gender === 'male'}
//                         onChange={this.handleChange}
//                     />Male
//                 </label>
//                 <label>
//                     <input 
//                         name='gender'
//                         value='female'
//                         type='radio' 
//                         checked={this.state.gender === 'female'}
//                         onChange={this.handleChange}
//                     />Female
//                 </label>
//                 <br/>
//                 <label>Fav Color</label>
//                 <select
//                     value={this.state.favColor}
//                     onChange={this.handleChange}
//                     name='favColor' 
//                 >
//                     <option value='blue'>Blue</option>
//                     <option value='red'>Red</option>
//                     <option value='green'>Green</option>
//                 </select>

//                 <button >Submit</button>

//                 <h1>{this.state.firstName}</h1>
//                 <h1>{this.state.lastName}</h1>
//                 <h1>you are{this.state.gender  }</h1>
//                 <h1>Your Fav color is {this.state.favColor}</h1>
//             </form>
//         );
//     }
// }
//-----------------------------------------------------------------------------------
function App(){
    return(
    <div>
        hello
        <FormPractice/>
    </div>
    );
}
//-----------------------------------------------------------------------------------
export default App;
