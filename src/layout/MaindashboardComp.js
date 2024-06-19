import React from 'react';
import { Outlet } from 'react-router-dom';
import NavComp from './NavComp';
import FooterComp from './FooterComp';

const MaindashboardComp = () => {
    return (
        <div className="container">
            {/* <h1>this is main dashboard</h1> */}
            <div className='card border-primary'>
                <div className='card-header border-primary'>card header
                    <NavComp/>
                </div>
                <div className='card-body border-primary'><Outlet/></div>
                <div className='card-footer border-primary'>card footer
                    <FooterComp/>
                </div>

            </div>
           
        </div>
    )
}

export default MaindashboardComp
