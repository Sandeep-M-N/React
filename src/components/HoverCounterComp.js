import React, { Component } from 'react'
import HOCComp from './HOCComp'

class HoverCounterComp extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    // counterinc =()=>{
    //     this.setState(({count:this.state.count+1}))
    // }
    
    render() {
        return (
            <div>
                <h1>count :{this.props.count}</h1>
                <h2 onMouseOver={()=>this.props.counterinc()}>Hover on me</h2>
            </div>
        )
    }
}

export default HOCComp(HoverCounterComp)
