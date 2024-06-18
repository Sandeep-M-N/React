import React, { Component } from "react";
class ClassComp extends Component{

    constructor(){
        super();
        this.state={
            company:"changepond",
            salary:20000
        }
    }
    render(){
        const {company,salary} = this.state;
        const {myName,post} = this.props;
       return <div>
          <h2>This is Class Component</h2>
          <p>
            my namer is:{myName} , Iam a {post}
          </p>
          {/* <p> my company name is {this.state.company}, and my salary is {this.state.salary}</p> */}
          <p> my company name is {company}, and my salary is {salary}</p>
       </div>
    }
}


export default ClassComp;