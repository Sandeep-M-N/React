import React from 'react'
import staticData from '../shared/constant/ConstantData';
import './ExternalMyCss.css';
import mumodule from './Mymodule.module.css';
const MyCss = () => {
    const txtobj ={
        color:true?"green":"red",
        fontSize:false?"20px":"30px",
        backgroundColor:"dodgerblue"
    }


    return (
        <React.Fragment>
            {/* use of internal css */}
            <h1 style={{color:"blueviolet", backgroundColor:"aqua"}}>my css</h1>
            <p style={txtobj}>hello all my friends, i hope your are doing well</p>
            <img className='imgprop' src={staticData.diamomd} alt='diamond'/> <br/>
            <img className={mumodule.box} src={staticData.gold} alt='gold'/>
            
        </React.Fragment>
    )
}

export default MyCss
