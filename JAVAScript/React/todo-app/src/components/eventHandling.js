import React from 'react';
import image from '../ChildParent.PNG';
function EventHandling(){
    // const url="ChildParent.PNG";
    return(
        <div>
            <img id='img'src={image} alt="ll" onMouseOver={()=>{
                console.log("HELLO");
            }} />
            <button onClick={()=>{console.log("kem")} }>BUTTON</button>
        </div>
    );
}
class ChangeStateNo extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0,
        }
        // binding
        this.handleClick=this.handleClick.bind(this);
    }
    // this.state.count++; // dont do directly
    // when we want to change clothes, we dont update the 
    // clothes as in repaint them . We actually replace
    // them with others.
    // we use method called set state
    // this.state.count+=1; // here the count is increased
    // but state is not updated
    // console.log("Changed "+ this.state.count);
    // the function that calls setState method the state needs to be binded to the class
    handleClick(){
        // this.state.counts++;
        // this.setState({count:1}); // error
        // this.setState({count:1}) // only to one but usless here as we care of the previous state
        this.setState(lastState=>{
            return {
                count:lastState.count+1,
            };
        })
     }
    render() {
        return(
            <div>
                <h1>{this.state.count}!</h1>     
                <button onClick={this.handleClick}> Change</button>      
            </div>
        );
    }
}
class ChildC extends React.Component{
    constructor(){
        super();
        this.state={
            countO:1,
            countI:1,
            // count:1,
        }
        this.loop=this.loop.bind(this);
    }
    loop(){
        this.setState(prevStat=>{
            return{
                count:prevStat.count+1,
                countO:(prevStat.countO==9)?1:(prevStat.countI==9?prevStat.countO+1:prevStat.countO),
                countI:(prevStat.countI==9)?1:prevStat.countI+1,
            };
        });
    }
    render() {
        return(
            <div className="cont">
            <h1>{this.state.countO}</h1>
            Outer
            <h1>{this.state.countI}</h1>
            Inner
            {/*<h1>{this.state.count}</h1>*/}
            <br></br>
            <br></br>
            <br></br>
            <button onClick={this.loop}>Increament</button>
            </div>
            );
        }
    }
    class ParentC extends React.Component{
        constructor() {
            super();
            this.state={
                count:0,
            }
        }
        render() {
            return(
                <div>
                    <h1>{this.state.count}</h1>
                    Parent
                </div>
            );
        }
    }
    class DateDisplay extends React.Component{
        constructor(){
            const date=new Date();
            super();
            this.state={
                hr:date.getHours(),
                min:date.getMinutes(),
                sec:date.getSeconds(),
            }
            this.updateT=this.updateT.bind(this);
        }
        updateT(){
            const date=new Date();
            this.setState(()=>{
                return(
                    {
                        hr:date.getHours(),
                        min:date.getMinutes(),
                        sec:date.getSeconds(),

                    }
                );
            })
        }
        render(){
            const date=new Date();
            // <h1 onTimeUpdate={updateT}>{date.getHours()+" "+date.getMinutes()+" "+date.getSeconds()}</h1>
            return (
                <div>
                    <h1> Date</h1>
                    <h1 onTimeUpdate={setInterval(this.updateT,1000
                    )}>{this.state.hr+" "+this.state.min+" "+this.state.sec}</h1>
                </div>
            );
        }
    }
    export {EventHandling,ChangeStateNo,ParentC,ChildC,DateDisplay};
    