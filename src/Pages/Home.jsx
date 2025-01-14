import React from 'react';
import Hero from '../components/Hero/Hero';
import ScaleCard from '../components/ScaleCard/ScaleCard';
import Features from '../components/Features/Features';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
           <ScaleCard></ScaleCard>
           <Features></Features>
        </div>
    );
};

export default Home;