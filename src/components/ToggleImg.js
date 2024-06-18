import React,{Component} from "react";
import diamond_ring from '../shared/images/diamond ring - Copy.jpeg';
import gold_ring from '../shared/images/gold ring - Copy.jpeg';

class ToggleImg extends Component{
constructor(){
    super();
    this.state={
        isCond:true,
        img:diamond_ring
    }
}
 changeimg = ()=>{
    if(!this.state.isCond){
     this.setState({img:gold_ring});
     this.setState({isCond:false});
    }
    else{
        this.setState({img:gold_ring});
        this.setState({isCond:true});
    }
 }

    render(){
        return(
            <div>
                <img src={this.state.img} alt="diamond"/>
                <button type="button" onClick={()=>this.changeimg()}>change</button>
            </div>
        )
    }
}

export default ToggleImg;