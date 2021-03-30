import React from 'react';
import ReactDOM from 'react-dom';

class OnlineClock extends React.Component{
    updateTime(){
        const date=new Date();
        this.setState(()=>{
            return {
                hr:date.getHours(),
                min:date.getMinutes(),
                sec:date.getSeconds(),
            }
        });
    }
    constructor(){
        const date=new Date(); 
        super();
        this.state={
            hr:date.getHours(),
            min:date.getMinutes(),
            sec:date.getSeconds(),
        }
        this.updateTime=this.updateTime.bind(this);
    }
    render(){
        return(
            <div className='main'>
                <h1>Date</h1>
                <div className='clk-class'>
                    <h1 onTimeUpdate={setInterval(this.updateTime,1000)}>
                        {this.state.hr+":"+this.state.min+":"+this.state.sec}
                    </h1>
                </div>
            </div>
        );
    }
}
// var hr,min,sec;
// function update(){
//     const date=new Date();
//     setState(()=>{
//         return {
//             hr :date.getHours(),
//             min:date.getMinutes(),
//             sec:date.getSeconds(),
//         }
//     })
// }
// function OnlineClockFunction(){
//     const date=new Date();
//         this.state={
//         hr:date.getHours(),
//         min:date.getMinutes(),
//         sec:date.getSeconds(),
//     }
//     this.update=this.update.bind(this);
//     return(
//     <div className='main'>
//         <h1>Date</h1>
//         <div className='clk-class'>
//             <h1 onTimeUpdate={setInterval(update,1000)}>
//                 {this.state.hr+" "+this.state.min+" "+this.state.sec}
//             </h1>
//         </div>
//     </div>
// );
// } 
export {OnlineClock};//OnlineClockFunction