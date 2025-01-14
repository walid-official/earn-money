import React from 'react';

const Start = () => {
    return (
        <div className='w-[70%] mx-auto py-20'>
            <div className="flex items-center justify-between border border-[#313843] bg-gradient-to-t from-[#27292f] to-[#10121d] shadow-2xl p-10 rounded-xl">
                <div className="">
                    <h2 className='text-white font-bold text-3xl leading-normal'>Let's Unlock <br /> Your Earning Potential</h2>
                    <p className='text-white pt-4'>Choose from 100+ opportunities to boost your financial growth.</p>
                </div>
                <div className="">
                    <button className='rounded-tr-2xl  rounded-bl-2xl font-bold bg-[#00d7c0] text-white border-none py-3 px-6'>Start Now</button>
                </div>
            </div>
        </div>
    );
};

export default Start;