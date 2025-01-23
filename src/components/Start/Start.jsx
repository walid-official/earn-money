import React from 'react';
import { NavLink } from 'react-router-dom';

const Start = () => {
    return (
        <div className='lg:w-[80%] md:w-[90%] mx-auto py-20'>
            <div className="md:flex items-center justify-between border border-[#313843] bg-gradient-to-t from-[#27292f] to-[#10121d] shadow-2xl p-10 rounded-xl">
                <div className="">
                    <h2 className='text-white font-bold text-4xl leading-normal'>Let's Unlock <br /> Your Earning Potential</h2>
                    <p className='text-white pt-4'>Choose from 100+ opportunities to boost your financial growth.</p>
                </div>
                <NavLink to="/dashboard" className="">
                    <button className='rounded-tr-2xl  rounded-bl-2xl font-bold bg-[#00d7c0] text-white border-none py-3 px-6'>Start Now</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Start;