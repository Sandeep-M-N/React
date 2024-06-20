import { Button } from '@mui/material';
import React, { useState } from 'react'

const UseStateHookComp = () => {
    const[count,setcount]=useState(0);
    const[name,setname]=useState("Sandeep");
    return (
        <div>
            <h2> my count is :{count}</h2>
            <Button variant='text' onClick={()=>setcount(count+1)}>Increment</Button>
            <hr/>
            <h2>My Name is : {name}</h2>
            <Button variant='text' onClick={()=>setname("Sandeep Rao")}>Change</Button>
        </div>
    )
}

export default UseStateHookComp
