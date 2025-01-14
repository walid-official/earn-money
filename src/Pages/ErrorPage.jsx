import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="">
                <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="" />
                <div className="">
                    <NavLink to="/"><button className='rounded-tr-2xl w-full rounded-bl-2xl font-bold bg-[#00d7c0] text-white border-none py-3 px-6'>Go Back</button></NavLink>
                    
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;