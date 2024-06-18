import React, { Component } from "react";


class SetStateComp extends Component{
 
    constructor(){
        super();
        this.state={
            count:0,
            name:"sandeep"
            
        }
    }
    counterinc = ()=>{
        // direct method
        // this.setState({count:this.state.count+1}); 

        // indirect method
        this.setState((plusState)=>({count:plusState.count+1}));
    }
    counterdec= ()=>{
        this.setState({count:this.state.count-1});
    }
    countername = ()=>{
        this.setState({name:"Sandeep Rao"})
    }

    

    render(){
        return (<div>
            <h1>my name is {this.state.name} </h1>
            <p>Count value is : <strong>{this.state.count}</strong></p>
            <button type="button" onClick={()=>this.counterinc()}>count++</button>
            <button type="button" onClick={()=>this.counterdec()}>count--</button>
            <button type="button" onClick={()=>this.countername()}>name</button>
        </div>

        )
    }
}


export default SetStateComp;