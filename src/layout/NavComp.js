import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {

   
    return (
        <div>
            {/* <h1>this is nav component</h1> */}
            <Link to="myslider" className='btn btn-danger btn-sm'>Myslider</Link>{" "}
            <Link to="myimages" className='btn btn-danger btn-sm'>MyImages</Link>{" "}
            <Link to="reacthook" className='btn btn-danger btn-sm'>Reacthook</Link>{" "}
            <Link to="parent" className='btn btn-danger btn-sm'>Parent</Link>{" "}
            <Link to="virtualdom" className='btn btn-danger btn-sm'>virtual DOM</Link>{" "}
            <Link to="formval" className='btn btn-warning btn-sm'>Form validation</Link>{" "}
            <Link to="productdash" className='btn btn-warning btn-sm'>CRUD</Link>{" "}
        </div>
    )
}

export default NavComp
