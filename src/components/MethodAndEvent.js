import React, { Component } from "react";


class MethodEventComp extends Component{

    greeting = ()=>{
        window.alert("Good afternoon all");
    }
    
    welcome = (...std)=>{
        window.alert(`welcome you ${std}`);
    }
     
    render(){
        return <div>
            <h2>this is method event Component</h2>
            <button type="button" onClick={()=>this.greeting()}>greeting</button>
            <button type="button" onClick={()=>this.welcome("sandeep")}>welcome</button>
            <h2 onMouseOver={()=>this.greeting()}>hove on me while selecting me</h2>

        </div>
    }
}
 


export default MethodEventComp;