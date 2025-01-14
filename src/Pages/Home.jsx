import React from 'react';
import Hero from '../components/Hero/Hero';
import ScaleCard from '../components/ScaleCard/ScaleCard';
import Features from '../components/Features/Features';
import Testimonial from '../components/Testimonial/Testimonial';
import Start from '../components/Start/Start';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
           <ScaleCard></ScaleCard>
           <Features></Features>
           <Testimonial></Testimonial>
           <Start></Start>
        </div>
    );
};

export default Home;