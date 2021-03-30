import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Information from './components/info' ;
import CallFun from './components/ParentChild' 
import header from './components/NewInterface' 
import {Insheader,InsBody} from './components/NewInterface';
// import  from './components/NewInterface';


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  // jsx syntax
// cant get two tags  so we make a div
  // <div>
  //   <h1>Hellow World</h1> 
  //   <p>asdhsa</p>          
  // </div>,
  // <div>
  //   <ul className="harsh">
  //     <li>Harsh</li>
  //     <li>Mankodiya</li>
  //     <li>Tony</li>
  //   </ul>          
  // </div>,
  // <MyAppFun/>
  // <Information/>
  // <CallFun/>
  // <App/>
  // <div>
  //   <Insheader/>
  //   <InsBody/>
  // </div>
  <App>
    
  </App>
  ,document.getElementById('root')
  );
  
  function MyAppFun(){
    return (
      <div class="divClass">
        <ol>
          <li>YYO</li>
          <li>BOYZ</li>
        </ol>
        <ul className="harsh">
          <li>Tony</li>
          <li>Stark</li>
          <li>Cap</li>
        </ul>   
      </div>
    );
  }
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
