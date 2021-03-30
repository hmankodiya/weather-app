import React from 'react';

class ChangeBackground extends React.Component{
    constructor(){
        // const x=document.getElementById('inp');
        // console.log(x.value);
        super();
        this.state = {
            val:1,
            color:[],
            x:2,
            y:2,
            bl:2,
            sp:2,
            col:'',
        }
        this.changeO=this.changeO.bind(this);
        this.changeC=this.changeC.bind(this);
        this.changeCP=this.changeCP.bind(this);
        this.changeSH=this.changeSH.bind(this);
    }
    changeO(){
        const x=document.getElementById('inp1');
        this.setState(()=>{
            return {
                val:x.value,
            };
        })
    }
    changeC(){
        const arr=['red','orange','blue','green','yellow','white']
        const x=document.getElementById('inp2');
        this.setState(()=>{
            return {
                color:arr[x.value],
            };
        })
    }
    changeCP(){
        const x=document.getElementById('inp3');
        this.setState(()=>{
            return {
                color:x.value,
            };
        })
    }
    changeSH(){
        const xx=document.getElementById('x');
        const yy=document.getElementById('y');
        const bl=document.getElementById('bl');
        const sp=document.getElementById('sp');
        const col=document.getElementById('col');
        this.setState(()=>{
            return {
                x  :xx.value,
                y  :yy.value,
                bl :bl.value,
                sp :sp.value,
                col:col.value,
            };
        })
    }
    render(){
        var bxshadow=this.state.x+"px "+this.state.y+"px "+this.state.bl+"px "+
                    this.state.sp+"px "+this.state.col
        return (
            <div> 
            <div className='slider' style={{opacity:this.state.val,background:this.state.color} }>
                HELLO CLASS
                <p></p>
                <input id='inp1' 
                    min={0} max={1} step={0.05} 
                    onChange={this.changeO} type='range'/>
                <input id='inp2' 
                    min={0} max={5} step={1} 
                    onChange={this.changeC} type='range'/>
                <input id='inp3' onChange={this.changeCP} type='color'/>
            </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className='bshadow'>
                    <div id='text-bx' style={{boxShadow:bxshadow}} >
                        HELLO
                    </div>
                    <label>X  :</label><input id='x'   type='range' onChange={this.changeSH}  max={20} min={-20}/>
                    <label>Y  :</label><input id='y'   type='range' onChange={this.changeSH}  max={20} min={-20}/>
                    <label>BL :</label><input id='bl'  type='range' onChange={this.changeSH}  max={20} min={0}  />
                    <label>SP :</label><input id='sp'  type='range' onChange={this.changeSH}  max={20} min={0}  />
                    <label>COL:</label><input id='col' type='color' onChange={this.changeSH} />
                </div>
            </div>    
        );
    }
}
export {ChangeBackground};