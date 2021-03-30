import React from 'react';
import '../Metronome.css';
import click1 from '../click1.wav';
import click2 from '../click2.wav';

class BPM extends React.Component{
    constructor(props){
        super(props);
        this.state={
            playing:false,
            bpm:100,
            count:0,
            mod: 4,
        }
        this.click1=new Audio(click1);
        this.click2=new Audio(click2);
        this.handleChange=this.handleChange.bind(this);
        this.onClk=this.onClk.bind(this);
        this.playClick=this.playClick.bind(this);
    }
    handleChange(){
        const x=document.getElementById('inp').value;
        // console.log(x);
        this.setState(()=>{
            return{
                bpm:x,
            }
        });
    }
    onClk(){
        if(this.state.playing){
            clearInterval(this.timer);
            this.setState(()=>{
                return({
                    playing:false,
                })
            })
        }
        else{
            this.timer = setInterval(
                this.playClick,(60 / this.state.bpm) * 1000); 
            this.setState(
                {
                    playing:true,
                },
            );
        }
    }
    playClick(){
        if(this.state.count%this.state.mod===0){
            this.click1.play();
        }
        else{
            this.click2.play();
        }
        this.setState(state=>({
            count:(state.count+1)%this.state.mod,
        }))
    }
    render(){
        let val=100;
        let playing=false; 
        return(
            <div className='metronome'>
                <div className='slider'>
                    <div>{this.state.bpm} BPM</div>
                    <input value={this.state.bpm}id='inp' onChange={this.handleChange} type='range' min='1' max='1000'/>
                </div>
                <button onClick={this.onClk}>{playing?'Stop':'Start'}</button>
            </div>
        );
    }
}
export default BPM;