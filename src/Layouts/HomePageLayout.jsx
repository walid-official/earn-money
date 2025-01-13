import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const HomePageLayout = () => {
    return (
        <div className='bg-gradient-to-r from-[#020710] to-[#1b2028] '>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default HomePageLayout;