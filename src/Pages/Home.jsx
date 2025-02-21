import React from "react";
import Hero from "../components/Hero/Hero";
import ScaleCard from "../components/ScaleCard/ScaleCard";
import Features from "../components/Features/Features";
import Testimonial from "../components/Testimonial/Testimonial";
import Start from "../components/Start/Start";
import DiamondFacility from "../components/DiamondFacility/DiamondFacility";
import TopWorkers from "../components/TopWorkers/TopWorkers";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <ScaleCard></ScaleCard>
      <TopWorkers></TopWorkers>
      <DiamondFacility></DiamondFacility>
      <Features></Features>
      <Testimonial></Testimonial>
      <Start></Start>
    </div>
  );
};

export default Home;
