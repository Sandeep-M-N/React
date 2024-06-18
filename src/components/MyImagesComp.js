import React,{Component} from "react";
import diamond_ring from "../shared/images/diamond ring - Copy.jpeg";
import gold_ring from "../shared/images/gold ring - Copy.jpeg";
import staticData from "../shared/constant/ConstantData";
class MyImagesComp extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render(){
        return (
            <div>
                <h3>hello to images</h3>
                <img src={diamond_ring} alt="daimond ring" height="200px" width="200px"/> &nbsp;
                <img src={gold_ring} alt="gold ring" height="200px" width="200px"/>
                <hr/>
                
                <img src={staticData.freeshipping} alt="freeship" height="200px" width="200px"/>{" "}
                <img src={staticData.sr} alt="SR" height="200px" width="200px"/>

            </div>
        )
    }
}

export default MyImagesComp;