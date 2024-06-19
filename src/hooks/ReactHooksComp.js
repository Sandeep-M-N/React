import React from 'react'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ReactHooksComp = () => {
    return (
        <div>
            {/* <h1>this is react hooks</h1> */}
            <div className='card border-danger'>
                <div className='card-header border-primary'>
                <Link to="usestate" className='btn btn-danger btn-sm'>UseState</Link>{" "}
                <Link to="useeffect" className='btn btn-danger btn-sm'>UseEffect</Link>{" "}
                </div>
                <div className='card-body border-primary'> <Outlet/></div>
            </div>
            
        </div>
    )
}

export default ReactHooksComp
