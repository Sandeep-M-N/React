import { BreakfastDining } from '@mui/icons-material'
import React, { Component } from 'react'

export class VirtualDomComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Breakfast:[{
                id:1,
                name:"idli"
             },{
                id:2,
                name:"dosa"
             },{
                id:3,
                name:"poori"
             },{
                id:4,
                name:"pongal"
             }]
        }
    }
    
    render() {
        return (
            <div>
               <h2>this is virtual DOm</h2> 
               <ul>
                {this.state.Breakfast.map((val,index)=>{
                    return <li key={index}>{val.name}</li>
                })}
               </ul>
            </div>
        )
    }
}

export default VirtualDomComp
