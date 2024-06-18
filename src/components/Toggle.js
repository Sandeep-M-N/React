import React, { Component } from 'react';
import diamond_necklace from '../components/shared/images/diamond necklace.jpeg';
import gold_necklace from '../components/shared/images/gold necklace.jpeg';

 class Toggle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             iscond:true,
             img:diamond_necklace,
             name:"diamond necklace"
        }
    }
    changeimg = ()=>{
        if(this.state.iscond){
            this.setState(({name:"gold necklace"}))
          this.setState(({img:gold_necklace}));
          this.setState(({iscond:false}));

        }
        else{
            this.setState(({name:"diamond necklace"}))
            this.setState(({img:diamond_necklace}));
            this.setState(({iscond:true}));
        }
    }
    
    render() {
        return (
            <div>
                <img src={this.state.img} alt="diamond_necklace" height="200px" width="200px"/>
                <h1>{this.state.name}</h1>
                <button type='button' onClick={()=>this.changeimg()}>change</button>
            </div>
        )
    }
}

export default Toggle
