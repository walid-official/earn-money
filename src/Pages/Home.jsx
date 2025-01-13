import React from 'react';
import Hero from '../components/Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="bg-black">
                <h2 className='text-white'>Hello</h2>
            </div>
        </div>
    );
};

export default Home;