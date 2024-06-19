import React, { Component } from 'react';
import HOCComp from './HOCComp';
import { Button } from '@mui/material';

 class ClickCounterComp extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    // countinc = ()=>{
    //     this.setState(({count:this.state.count+1}))
    // }
    
    render() {
        return (
            <div>
              <h1 className='text-primary'> count :{this.props.count}</h1>  
              {/* <button type='button' className='btn btn-danger' onClick={()=>this.props.counterinc()}>increment</button> */}
              <Button variant='outlined' onClick={()=>this.props.counterinc()}>increment</Button>
            </div>
        )
    }
}

export default HOCComp(ClickCounterComp)
