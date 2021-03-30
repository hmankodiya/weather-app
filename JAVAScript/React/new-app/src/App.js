import logo from './logo.svg';
import './App.css';
import CallFun from './components/ParentChild';
import Information from './components/info';
import Todo from './components/Todo';
import ConctactCard from './components/PropsContactCards';
import Jokes from './components/Jokes';
import jokesData from './components/jokesData';


function App() {
  // const jokeCompo=jokesData.map(joke => {
  //   return (
  //     <Jokes question={joke.question} answer={joke.answer}/>
  //     );
  // })
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div>
    //   <nav>
    //     <h1>Hello World</h1>
    //   </nav>
    // </div>
    // <div>
      // <Information/>
    //   <CallFun/>
    // </div>
    // <Todo/>
    // <div>
    //   <ConctactCard contact={{name:"HarshStark", phone:"121", email:'a'}} />
    //   {
    //   // <ConctactCard name="TonyStark"  phone="122" email='b' />
    //   // <ConctactCard name="IronStark"  phone="123" email='c' />
    //   }
    // </div>
    
    // <div>
    //   {
    //     // <Jokes question="  abc?" answer=" def"/>
    //     // <Jokes answer="hello"/>
    //   }
    //   {jokeCompo}
    //   {/*mapping the components*/}
    // </div>


    // <br></br>
    <Todo></Todo>
  );
}

export default App;
