import logo from './logo.svg';
import './App.css';
import {OnlineClock} from './components/Time.js'; //OnlineClockFunction
import {ChangeBackground} from './components/ChangeBG.js'; //OnlineClockFunction
import BPM from './components/BPM.js'; //OnlineClockFunction


function App() {
  return (
    // <div>Hello</div>
    // <OnlineClock></OnlineClock>
    // <OnlineClockFunction></OnlineClockFunction>
    <div>
      <BPM></BPM>
    </div>
    
  );
}

export default App;
