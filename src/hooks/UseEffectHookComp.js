import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'

const UseEffectHookComp = () => {
    const[count,setcount]=useState(0);
    const[salary,setsalary]=useState(20000);

    // case1 :when no dependency value pass
    // useEffect(()=>{
    //     setcount(count+1);
    // })

    // case 2 :when we want to execute useeffect only once render
    // useEffect(()=>{
    //     setcount(count+1);
    // },[])

    // case 3:when we want to execute useeffect hook as your choice
    useEffect(()=>{
        setcount(count+1);
    },[salary])

    return (
        <div>
           <h1>this is Use effect hook</h1> 
           <p>Counter value is : <strong>{count}</strong></p>
           <p>Salary is : {salary}</p>
           <Button variant='contained' onClick={()=>setsalary(salary+3000)}>Increment</Button>
        </div>
    )
}

export default UseEffectHookComp
