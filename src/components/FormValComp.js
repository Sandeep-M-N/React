import React, { useState } from "react";


const FormValComp = () => {
    const[user,setuser]= useState({
        UserName:"",
        UserPassword:"",
        term:false
    })

    const inputChangeHandler = (event)=>{
        const {type,name,value} = event.target;
        setuser({[name]:value})
    }

    const checkData = (event)=>{
        event.preventDefault();
        if(user.UserName.trim()===""){
            window.alert("user name is required");
            return false;
        }
        if(!user.UserName.trim().match('^[a-zA-Z]{3,20}$')){
            window.alert("user name must contain only character min-3 and max-20");
            return false;
        }
    }
    return (
        <div>
            <h2>this is form validation</h2>
            <form onSubmit={checkData}>
                <label>Enter User Name</label>
                <input type='text' name='userName' onChange={inputChangeHandler} value={user.UserName}/>
                <label>Enter User Password</label>
                <input type='text' name='userPassword' onChange={inputChangeHandler} value={user.UserPassword} /> <br /> 
                <input type='checkbox' name='term' onChange={inputChangeHandler} value={user.term} />
                <label>I Accept Term and Condition</label><br />
                <button type='submit' className='btn btn-primary mt-2'>Submit</button>
            </form>
        </div>
    )
}

export default FormValComp
