import React from 'react'

const ChildCom1 = (props) => {
    return (
        <div>
        <p>my name is :{props.name}</p>
        <p>my salary is :{props.salary}</p>
        <button type='button' onClick={()=>props.changedata()}>changedata</button>
        </div>
    )
}

export default ChildCom1;
