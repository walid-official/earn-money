import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

const Start = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className='lg:w-[70%] w-[90%] mx-auto py-20'>
            <div className={`md:flex items-center justify-between shadow-2xl p-10 rounded-xl ${
                  theme === "light"
                    ? "bg-gradient-to-r from-[#d7d7d7] to-[#eaeaea] text-black"
                    : "bg-gradient-to-t from-[#27292f] to-[#10121d] text-white border-[#313843]"
                }`}>
                <div className="mb-6">
                    <h2 className=' font-bold text-3xl md:text-4xl md:leading-normal'>Let's Unlock <br /> Your Earning Potential</h2>
                    <p className=' pt-4'>Choose from 100+ opportunities to boost your financial growth.</p>
                </div>
                <NavLink to="/dashboard" className="mt-8 lg:mt-0">
                    <button className='rounded-md font-bold bg-[#00d7c0] text-white border-none py-3 px-6'>Start Now</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Start;