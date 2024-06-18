import React, { Component } from 'react';
import staticData from './shared/constant/ConstantData';

export class MultipleImg extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name:"diamond ring",
             img:staticData.diamomd_ring
        }
    }
    diamomd_ring = ()=>{
        this.setState(({img:staticData.diamomd_ring}));
        this.setState(({name:"diamond ring"}));
    }
    gold_ring = ()=>{
        this.setState(({img:staticData.gold_ring}));
        this.setState(({name:"gold ring"}));
    }
    silver_earring = ()=>{
        this.setState(({img:staticData.silver_earing}));
        this.setState(({name:"silver earing"}));
    }
    gold_bracelet =()=>{
        this.setState(({img:staticData.gold_bracelet}));
        this.setState(({name:"gold bracelet"}))
    }


    
    render() {
        return (
            <div>
                <img src={this.state.img} alt="" height="200px" width="200px" />
                <h2>{this.state.name}</h2>
                <button type='button' onClick={()=>this.diamomd_ring()}>diamond ring</button>{" "}
                <button type='button' onClick={()=>this.gold_ring()}>gold ring</button>{" "}
                <button type='button' onClick={()=>this.silver_earring()}>silver earing</button>{" "}
                <button type='button' onClick={()=>this.gold_bracelet()}>gold bracelet</button>
            </div>
        )
    }
}

export default MultipleImg
