import React from 'react';
import { NavLink } from 'react-router-dom';

const Start = () => {
    return (
        <div className='lg:w-[70%] w-[90%] mx-auto py-20'>
            <div className="md:flex items-center justify-between border border-[#313843] bg-gradient-to-t from-[#27292f] to-[#10121d] shadow-2xl p-10 rounded-xl">
                <div className="mb-6">
                    <h2 className='text-white font-bold text-3xl md:text-4xl md:leading-normal'>Let's Unlock <br /> Your Earning Potential</h2>
                    <p className='text-white pt-4'>Choose from 100+ opportunities to boost your financial growth.</p>
                </div>
                <NavLink to="/dashboard" className="mt-8 lg:mt-0">
                    <button className='rounded-md font-bold bg-[#00d7c0] text-white border-none py-3 px-6'>Start Now</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Start;