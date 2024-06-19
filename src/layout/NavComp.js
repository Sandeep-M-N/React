import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
    return (
        <div>
            {/* <h1>this is nav component</h1> */}
            <Link to="myslider" className='btn btn-danger btn-sm'>Myslider</Link>{" "}
            <Link to="myimages" className='btn btn-danger btn-sm'>MyImages</Link>{" "}
            <Link to="reacthook" className='btn btn-danger btn-sm'>Reacthookr</Link>{" "}
            <Link to="parent" className='btn btn-danger btn-sm'>Parent</Link>{" "}
        </div>
    )
}

export default NavComp
