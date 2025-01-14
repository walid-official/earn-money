import React from 'react';
import Hero from '../components/Hero/Hero';
import ScaleCard from '../components/ScaleCard/ScaleCard';
import Features from '../components/Features/Features';
import Testimonial from '../components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
           <ScaleCard></ScaleCard>
           <Features></Features>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;