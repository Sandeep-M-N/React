import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavComp = () => {

   const nav = useNavigate();

 const redirect =()=>{
    window.confirm("are you sure you want to logout");
    nav(`/login/signout`)
}
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
            <Link to="signout" className='btn btn-warning btn-sm' onClick={()=>redirect()}>Sign Out</Link>{" "}
        </div>
    )
}

export default NavComp
