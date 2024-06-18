import React, { Component } from "react";


class Mydetails extends Component{
 constructor(){
    super();
    this.state={
    gender:"male",
    martial_status:"single",
    address:"chennai",

    }
 }

    render(){
        const {gender,martial_status,address}=this.state;
        const {fname,lname,email,contact} = this.props;
      return <div>
        <h1> my name is {fname}{lname} my email is {email}and my contact{contact} </h1>
        <p>my gender is {gender} my martial status is {martial_status} my address is {address}</p>
      </div>
    }
}

export default Mydetails;